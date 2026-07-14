import Link from "next/link";
import { prisma } from "@/lib/prisma";


export default async function SearchPage({

searchParams,

}:{

searchParams: Promise<{
q?:string;
}>

}){


const {q}=await searchParams;


const query=q || "";



const posts = query

?

await prisma.post.findMany({

where:{

published:true,

OR:[

{
title:{
contains:query,
mode:"insensitive",
},
},

{
description:{
contains:query,
mode:"insensitive",
},
},

{
category:{
contains:query,
mode:"insensitive",
},
},

],

},

orderBy:{

createdAt:"desc",

},

})

:

[];





return (

<main className="
px-8
py-20
">


<div className="
mx-auto
max-w-5xl
">


<h1 className="
text-4xl
font-bold
">

Search Articles

</h1>



<form
className="
mt-8
"
>


<input

name="q"

defaultValue={query}

placeholder="Search articles..."

className="
w-full
rounded-xl
border
px-5
py-4
"

/>


</form>




<p className="
mt-8
text-gray-500
">

{
query
?
`${posts.length} results found for "${query}"`
:
"Search our articles"
}

</p>





<div className="
mt-8
grid
gap-6
md:grid-cols-2
">


{

posts.map((post)=>(


<Link

key={post.id}

href={`/posts/${post.slug}`}

className="
rounded-2xl
border
p-6
transition
hover:shadow-lg
"

>


<p className="
text-sm
uppercase
text-gray-500
">

{post.category}

</p>



<h2 className="
mt-2
text-xl
font-bold
">

{post.title}

</h2>



<p className="
mt-3
text-gray-600
">

{post.description}

</p>



</Link>


))

}


</div>


</div>


</main>

);

}