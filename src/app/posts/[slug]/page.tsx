import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ViewCounter from "@/components/ViewCounter";
import type { Metadata } from "next";
import NewsLetter  from "@/components/NewsLetter";
import Link from "next/link";
import { calculateReadingTime } from "@/lib/readingTime";




export async function generateMetadata({

params,

}:{

params:Promise<{
slug:string;
}>

}):Promise<Metadata>{


const {slug}=await params;


const post = await prisma.post.findUnique({

where:{
slug,
},

});


if(!post){

return {

title:"Article Not Found",

};

}



return {

title:
post.seoTitle || post.title,


description:
post.seoDescription || post.description,


keywords:
post.keywords?.split(","),


openGraph:{

title:
post.seoTitle || post.title,


description:
post.seoDescription || post.description,


images:[
post.image
],

},


};

}





export default async function PostPage({

params,

}:{

params:Promise<{
slug:string;
}>

}){


const {slug}=await params;



const post = await prisma.post.findUnique({

where:{
slug,
},

});



if(!post){

notFound();

}





const relatedPosts = await prisma.post.findMany({

where:{

published:true,

NOT:{
slug:post.slug,
},

},

take:3,

orderBy:{

createdAt:"desc",

},

});





return (

<main className="
px-8
py-20
">

    




<article className="
mx-auto
max-w-4xl
">


<ViewCounter slug={post.slug}/>



<div className="text-center">


<Link

href={`/category/${encodeURIComponent(post.category)}`}

className="
inline-block
rounded-full
bg-blue-100
px-4
py-2
text-sm
font-semibold
text-blue-700
transition
hover:bg-blue-200
"

>

{post.category}

</Link>



<h1 className="
mt-6
text-4xl
font-bold
leading-tight
md:text-6xl
">

{post.title}

</h1>



<div className="
mt-6
flex
flex-wrap
justify-center
gap-3
text-gray-500
">


<span>
By {post.author}
</span>


<span>
•
</span>


<span>

{calculateReadingTime(post.content)}
</span>


<span>
•
</span>


<span>
{post.createdAt.toDateString()}
</span>


<span>
•
</span>


<span>
{post.views} views
</span>


</div>


</div>





{
post.image && (

<img

src={post.image}

alt={post.imageAlt || post.title}

className="
mt-12
h-[500px]
w-full
rounded-3xl
object-cover
"

/>

)

}





<div

className="
prose
prose-lg
mt-12
max-w-none
"

dangerouslySetInnerHTML={{

__html:post.content

}}

/>





{
relatedPosts.length > 0 && (



<section className="
mt-20
">
    


<h2 className="
text-3xl
font-bold
">

You may also like

</h2>

<NewsLetter />




<div className="
mt-8
grid
gap-6
md:grid-cols-3
">


{
relatedPosts.map((item)=>(


<a

key={item.id}

href={`/posts/${item.slug}`}

className="
rounded-2xl
border
p-5
hover:shadow-lg
transition
"

>


<h3 className="
font-bold
text-xl
">

{item.title}

</h3>



<p className="
mt-3
text-gray-500
line-clamp-3
">

{item.description}

</p>



</a>


))

}


</div>


</section>
)
}




</article>


</main>

);

}