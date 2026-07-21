import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeletePostButton from "@/components/DeletePostButton";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/session";


export default async function PostsPage(){

const admin = await getCurrentAdmin();

if (!admin) {
  redirect("/admin/login");
}


const posts = await prisma.post.findMany({

orderBy:{
createdAt:"desc",
},

});



return (

<main className="px-8 py-20">


<div className="flex items-center justify-between">


<h1 className="text-4xl font-bold">
Manage Articles
</h1>


<Link

href="/admin/posts/new"

className="
rounded-lg
bg-black
px-5
py-3
text-white
hover:bg-gray-500
"

>

New Article

</Link>


</div>





<div className="mt-10 overflow-hidden rounded-2xl border">


<table className="w-full">


<thead className="bg-gray-100">


<tr>


<th className="p-4 text-left text-black">
Image
</th>


<th className="p-4 text-left text-black">
Article
</th>


<th className="p-4 text-left text-black">
Category
</th>


<th className="p-4 text-left text-black">
Status
</th>


<th className="p-4 text-left text-black">
Date
</th>


<th className="p-4 text-left ">
Actions
</th>


</tr>


</thead>





<tbody>


{
posts.map((post)=>(


<tr
key={post.id}
className="border-t"
>


<td className="p-4">


<div className="relative h-16 w-24 overflow-hidden rounded-lg">


<Image

src={
post.image || "/images/logo.png"
}

alt={post.title}

fill

className="object-cover"

/>


</div>


</td>





<td className="p-4">


<div>

<p className="font-semibold">
{post.title}
</p>


<p className="text-sm text-gray-500">
{post.slug}
</p>


</div>


</td>






<td className="p-4">

{post.category}

</td>







<td className="p-4">


{
post.published

?

<span

className="
rounded-full
bg-green-100
px-3
py-1
text-sm
text-green-700
"

>

Published

</span>


:

<span

className="
rounded-full
bg-gray-100
px-3
py-1
text-sm
text-gray-600
"

>

Draft

</span>

}


</td>








<td className="p-4 text-gray-500">


{
post.createdAt.toDateString()
}


</td>








<td className="p-4">


<div className="flex gap-4">


<Link

href={`/admin/posts/${post.id}/edit`}

className="
text-blue-600
hover:underline
"

>

Edit

</Link>





<DeletePostButton

id={post.id}

/>



</div>


</td>





</tr>


))
}


</tbody>


</table>


</div>


</main>

);

}