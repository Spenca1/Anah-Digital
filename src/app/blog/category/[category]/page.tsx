import Image from "next/image";
import { posts } from "@/content/posts";
import Link from "next/link";


export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {


const { category } = await params;


const decodedCategory =
decodeURIComponent(category);



const filteredPosts = posts.filter(
(post)=>
post.category === decodedCategory
);



return (

<main className="px-8 py-20">


<h1 className="text-5xl font-bold">

{decodedCategory}

</h1>


<div className="mt-10 grid gap-8 md:grid-cols-2">


{
filteredPosts.map((post)=>(


<article
key={post.slug}
className="
rounded-2xl
border
p-6
"
>


<h2 className="text-2xl font-bold">

{post.title}

</h2>


<p className="mt-3 text-gray-600">

{post.description}

</p>


<Link
href={`/blog/${post.slug}`}
className="mt-4 inline-block text-blue-600"
>

Read article →

</Link>


</article>


))
}


</div>


</main>

);

}