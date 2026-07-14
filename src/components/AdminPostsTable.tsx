"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DeletePostButton from "./DeletePostButton";


export default function AdminPostsTable({
posts,
}:{
posts:any[];
}){


const [search,setSearch]=useState("");

const [status,setStatus]=useState("All");

const [category,setCategory]=useState("All");



const categories = [
"All",
...Array.from(
new Set(posts.map(post=>post.category))
)
];



const filteredPosts = posts.filter((post)=>{


const matchesSearch =
post.title.toLowerCase().includes(search.toLowerCase()) ||
post.description.toLowerCase().includes(search.toLowerCase());



const matchesStatus =
status==="All" ||
(status==="Published" && post.published) ||
(status==="Draft" && !post.published);



const matchesCategory =
category==="All" ||
post.category===category;



return (
matchesSearch &&
matchesStatus &&
matchesCategory
);


});




return (

<div>


<div className="mt-8 flex flex-col gap-4 md:flex-row">


<input

placeholder="Search articles..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
rounded-lg
border
px-4
py-3
"

 />




<select

value={status}

onChange={(e)=>setStatus(e.target.value)}

className="
rounded-lg
border
px-4
py-3
"

>

<option>
All
</option>

<option>
Published
</option>

<option>
Draft
</option>


</select>





<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

className="
rounded-lg
border
px-4
py-3
"

>


{
categories.map((cat)=>(

<option key={cat}>

{cat}

</option>

))
}


</select>


</div>





<div className="mt-10 overflow-hidden rounded-2xl border">


<table className="w-full">


<tbody>


{
filteredPosts.map((post)=>(

<tr
key={post.id}
className="border-t"
>


<td className="p-4">

<div className="relative h-16 w-24">

<Image

src={post.image || "/images/logo3.png"}

alt={post.title}

fill

className="object-cover rounded-lg"

/>

</div>

</td>



<td className="p-4">

<div>

<p className="font-semibold">
{post.title}
</p>


<p className="mt-2 text-sm text-gray-500">

{post.description}

</p>


</div>

</td>



<td className="p-4">

{post.category}

</td>



<td className="p-4 text-gray-500">

{post.createdAt.toDateString()}

</td>



<td className="p-4">

{
post.published
?
<span className="text-green-600">
Published
</span>
:
<span className="text-gray-500">
Draft
</span>
}

</td>



<td className="p-4">


<Link

href={`/admin/posts/${post.id}/edit`}

className="text-blue-600"

>

Edit

</Link>


<DeletePostButton id={post.id}/>


</td>



</tr>

))
}


</tbody>

</table>


</div>


</div>

);

}