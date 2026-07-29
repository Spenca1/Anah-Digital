import { prisma } from "@/lib/prisma";
import ViewsChart from "@/components/ViewsChart";
import SubscribersChart from "@/components/SubscribersChart";
import CategoryChart from "@/components/CategoryChart";
import AnalyticsFilter from "@/components/AnalyticsFilter";
import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/session";



export default async function AnalyticsPage({

searchParams,

}:{

searchParams: Promise<{
period?: string;
}>

}){

    const admin = await getCurrentAdmin();

if (!admin) {
  redirect("/admin/login");
}

const { period } = await searchParams;


const selectedPeriod = period || "all";

console.log("Analytics period:", selectedPeriod);

const now = new Date();

let startDate: Date | undefined;


if(selectedPeriod === "today"){

startDate = new Date(
now.getFullYear(),
now.getMonth(),
now.getDate()
);

}


if(selectedPeriod === "week"){

startDate = new Date();

startDate.setDate(
now.getDate() - 7
);

}


if(selectedPeriod === "month"){

startDate = new Date();

startDate.setDate(
now.getDate() - 30
);

}


if(period === "month"){

startDate = new Date();

startDate.setDate(
now.getDate() - 30
);

}

const posts: Awaited<ReturnType<typeof prisma.post.findMany>> =
  await prisma.post.findMany({
    where:
      startDate
        ? {
            createdAt: {
              gte: startDate,
            },
          }
        : undefined,

    orderBy: {
      views: "desc",
    },
  });



const categoryMap: Record<string, number> = {};



posts.forEach((post) => {

if(!categoryMap[post.category]){

categoryMap[post.category] = 0;

}


categoryMap[post.category] += post.views;


});



const categoryData = Object.keys(categoryMap).map(
(category)=>({

name:category,

views:categoryMap[category],

})
);



const chartData = posts.map((post) => ({

name:post.title.slice(0,10),

views:post.views,

}));

const subscribers = await prisma.subscriber.findMany({

where:

startDate
?
{
createdAt:{
gte:startDate,
},
}
:
undefined,


orderBy:{
createdAt:"asc",
},

});

const subscriberData = subscribers.map((subscriber,index)=>({

name:
new Date(
subscriber.createdAt
)
.toLocaleDateString(),

subscribers:index + 1,

}));


const totalViews = posts.reduce((total, post) => total + post.views, 0)



const publishedPosts = posts.filter((post) => post.published)



const draftPosts = posts.filter((post) => !post.published);



return (

<main className="px-8 py-20">


<h1 className="
text-4xl
font-bold
">

Analytics

</h1>


<AnalyticsFilter />


<p className="
mt-2
text-gray-500
">

Content and audience performance overview

</p>




<div className="
mt-10
grid
gap-6
md:grid-cols-3
">



<div className="
rounded-2xl
border
p-6
shadow-sm
">

<p className="text-gray-500">

Total Views

</p>


<h2 className="
mt-2
text-4xl
font-bold
">

{totalViews}

</h2>


</div>





<div className="
rounded-2xl
border
p-6
shadow-sm
">

<p className="text-gray-500">

Subscribers

</p>


<h2 className="
mt-2
text-4xl
font-bold
">

{subscribers.length}

</h2>


</div>






<div className="
rounded-2xl
border
p-6
shadow-sm
">

<p className="text-gray-500">

Published Articles

</p>


<h2 className="
mt-2
text-4xl
font-bold
">

{publishedPosts.length}

</h2>


</div>



</div>

<section className="mt-12">

<ViewsChart data={chartData}/>

</section>

<section className="mt-12">

<CategoryChart data={categoryData}/>

</section>

<section className="mt-12">

<SubscribersChart data={subscriberData}/>

</section>

<section className="mt-12">


<h2 className="
text-3xl
font-bold
">

Top Performing Articles

</h2>



<div className="
mt-6
space-y-4
">


{
posts
  .slice(0, 5)
  .map((post) => (


<div

key={post.id}

className="
rounded-xl
border
p-5
flex
justify-between
"

>


<div>

<h3 className="font-bold">

{post.title}

</h3>


<p className="text-gray-500">

{post.views} views

</p>


</div>


</div>


))

}



</div>


</section>




<section className="mt-12">


<h2 className="
text-3xl
font-bold
">

Content Status

</h2>



<div className="
mt-6
grid
gap-6
md:grid-cols-2
">



<div className="
rounded-xl
border
p-5
">

<p className="text-gray-500">

Draft Articles

</p>


<h3 className="text-3xl font-bold">

{draftPosts.length}

</h3>


</div>




<div className="
rounded-xl
border
p-5
">

<p className="text-gray-500">

Published Articles

</p>


<h3 className="text-3xl font-bold">

{publishedPosts.length}

</h3>


</div>



</div>


</section>



</main>

);

}