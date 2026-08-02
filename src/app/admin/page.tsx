import AdminHeader from "@/components/AdminHeader";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const posts: Awaited<
    ReturnType<typeof prisma.post.findMany>
  > = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const publishedPosts = posts.filter(
    (post: (typeof posts)[number]) => post.published
  );

  const draftPosts = posts.filter(
    (post: (typeof posts)[number]) => !post.published
  );

  const subscribers: Awaited<
    ReturnType<typeof prisma.subscriber.findMany>
  > = await prisma.subscriber.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalViews = posts.reduce(
  (total: number, post) => total + post.views,
  0
);

  const topArticles = [...publishedPosts]
    .sort(
      (
        a: (typeof posts)[number],
        b: (typeof posts)[number]
      ) => b.views - a.views
    )
    .slice(0, 5);



return (

<main
  className="
    min-h-screen
    bg-gray-50
    dark:bg-black
    text-gray-900
    dark:text-white
    px-8
    py-20
    transition-colors
    duration-300
  "
>

<AdminHeader />


<div className="mt-10 grid gap-6 md:grid-cols-3">


{/* Subscribers */}

<div className="
rounded-2xl
border
border-gray-200
dark:border-gray-800
bg-white
dark:bg-zinc-900
p-6
shadow-sm
transition-colors
duration-300
">

<p className="text-gray-500">

Subscribers

</p>


<h2 className="mt-2 text-4xl font-bold">

{subscribers.length}

</h2>


</div>



{/* Published */}

<div className="
rounded-2xl
border
border-gray-200
dark:border-gray-800
bg-white
dark:bg-zinc-900
p-6
shadow-sm
transition-colors
duration-300
">

<p className="text-gray-500">

Published Articles

</p>


<h2 className="mt-2 text-4xl font-bold">

{publishedPosts.length}

</h2>


</div>




{/* Drafts */}

<div className="
rounded-2xl
border
border-gray-200
dark:border-gray-800
bg-white
dark:bg-zinc-900
p-6
shadow-sm
transition-colors
duration-300
">

<p className="text-gray-500">

Draft Articles

</p>


<h2 className="mt-2 text-4xl font-bold">

{draftPosts.length}

</h2>


</div>





{/* Total Views */}

<div className="
rounded-2xl
border
border-gray-200
dark:border-gray-800
bg-white
dark:bg-zinc-900
p-6
shadow-sm
transition-colors
duration-300
">

<p className="text-gray-500">

Total Views

</p>


<h2 className="mt-2 text-4xl font-bold">

{totalViews}

</h2>


</div>





{/* Status */}

<div className="
rounded-2xl
border
border-gray-200
dark:border-gray-800
bg-white
dark:bg-zinc-900
p-6
shadow-sm
transition-colors
duration-300
">

<p className="text-gray-500">

Status

</p>


<h2 className="mt-2 text-4xl font-bold text-green-600">

Online

</h2>


</div>


</div>






<section className="mt-12">


<h2 className="text-3xl font-bold">

Top Articles

</h2>




<div className="mt-6 space-y-4">


{
topArticles.map((post: (typeof posts)[number]) => (


<div
key={post.id}

className="
rounded-xl
border
p-5
"

>


<h3 className="font-bold">

{post.title}

</h3>



<p className="text-gray-500">

{post.views} views

</p>



</div>


))

}


</div>



</section>

<section className="
rounded-xl
border
border-gray-200
dark:border-gray-800
bg-white
dark:bg-zinc-900
p-5
flex
transition-colors
duration-300
">


<h2 className="
text-3xl
font-bold
">

Recent Subscribers

</h2>



<div className="
mt-6
space-y-4
">

{
subscribers
.slice(0,5)
.map((subscriber: (typeof subscribers)[number]) => (

<div
key={subscriber.id}


className="
rounded-xl
border
p-5
flex
justify-between
"

>


<p className="font-medium">

{subscriber.email}

</p>



<p className="text-gray-500">

{
new Date(
subscriber.createdAt
)
.toLocaleDateString()
}

</p>


</div>


))

}


</div>


</section>



</main>

);

}