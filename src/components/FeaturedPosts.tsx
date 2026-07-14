import Link from "next/link";
import NewsLetter from "./NewsLetter";



export default function FeaturedPosts({

posts,

}:{

posts:any[];

}){


return (

<section className="
px-8
py-20
">



<div className="
mx-auto
max-w-6xl
">


<h2 className="
text-4xl
font-bold
">

Latest Articles

</h2>



<p className="
mt-3
text-gray-500
">

Thoughts, tutorials and lessons from my journey building software.

</p>



<div className="
mt-10
grid
gap-8
md:grid-cols-3
">


{
posts.map((post)=>(

      


<article

key={post.id}

className="
overflow-hidden
rounded-2xl
border
shadow-sm
"

>


{
post.image && (

<img

src={post.image}

alt={post.title}

className="
h-52
w-full
object-cover
"

/>

)

}



<div className="
p-6
">


<p className="
text-sm
text-gray-500
">

{post.category}

</p>



<h3 className="
mt-2
text-xl
font-bold
">

{post.title}

</h3>



<p className="
mt-3
text-gray-600
line-clamp-3
">

{post.description}

</p>



<div className="
mt-5
flex
justify-between
items-center
">


<span className="
text-sm
text-gray-500
">

{post.readTime}

</span>



<Link

href={`/posts/${post.slug}`}

className="
font-medium
hover:underline
"

>

Read Article →

</Link>



</div>




</div>


</article>



))
}



</div>


</div>


</section>

);

}