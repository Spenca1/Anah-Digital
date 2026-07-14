"use client";


import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
//import NewsLetter from "@/components/NewsLetter";
//import { calculateReadingTime } from "@/lib/readingTime";




  export default function BlogClient({
  posts,
}: {
  posts: any[];
}) {

  const featuredPost = posts.length > 0 ? posts[0] : null;


  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");


  const categories = [
    "All",
    "Digital Solutions",
    "Artificial Intelligence",
    "Developer Journey",
  ];


const filteredPosts = posts.filter((post) => {

  const matchesCategory =
    selectedCategory === "All" ||
    post.category === selectedCategory;


  const matchesSearch =
    post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||

    post.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());


  return matchesCategory && matchesSearch;

});


  return (

    <main className="px-8 py-20">


      {/* Blog Header */}

      <section className="mx-auto max-w-3xl mt-[-20px] text-center">

        <h1 className="text-5xl font-bold">
          Insights, Technology & Digital Growth
        </h1>


        <p className="mt-5 text-lg text-gray-600">
          Practical ideas about software development,
          digital solutions, and how Nigerian businesses
          can use technology to grow.
        </p>

      </section>



      {/* Featured Article */}
{
featuredPost && (
      <section className="mt-12 overflow-hidden rounded-3xl border">


        <div className="grid md:grid-cols-2">


          <div className="relative h-80">


         <Image
src={
  featuredPost.image && featuredPost.image.trim() !== ""
    ? featuredPost.image
    : "/images/image1.png"
}
alt={featuredPost.title}
fill
className="object-cover"
/>


          </div>



          <div className="flex flex-col justify-center p-8">


            <p className="text-blue-600">
              Featured Article
            </p>


            <h2 className="mt-3 text-3xl font-bold">

              {featuredPost.title}

            </h2>


            <p className="mt-4 text-gray-600">

              {featuredPost.description}

            </p>


            <div className="mt-4 text-sm text-gray-500">

              {featuredPost.category} 

            </div>


            <Link
              href={`/blog/${featuredPost.slug}`}
              className="mt-6 font-semibold text-blue-600"
            >

              Read article →

            </Link>
          </div>
        </div>
      </section>
      )
}




      {/* Categories */}

      <div className="mt-12 flex flex-wrap gap-3">
<div className="mt-10 max-w-xl">

<input

type="text"

placeholder="Search articles..."

value={searchTerm}

onChange={(e)=>
setSearchTerm(e.target.value)
}

className="
w-full
rounded-xl
border
px-5
py-3
outline-none
focus:ring-2
focus:ring-blue-500
"

/>

</div>

        {
          categories.map((category)=>(

            <button

              key={category}

              onClick={() =>
                setSelectedCategory(category)
              }

              className={`
                rounded-full
                px-5
                py-2
                text-sm
                transition
                cursor-pointer
                mt-10

                ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white w-50 h-10 cursor-pointer"
                    : "bg-gray-200 text-gray-700 w-50 h-10"
                }
              `}

            >

              {category}

            </button>

          ))
        }


      </div>




      {/* Blog Cards */}


      <section className="mt-16">


        <h2 className="text-4xl font-bold">

          Latest Articles

        </h2>



        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {
filteredPosts.length === 0 && (

<p className="mt-10 text-gray-500">

No articles found. Try another search.

</p>

)
}


          {
            filteredPosts.map((post)=>(


              <article

                key={post.slug}

                className="
                overflow-hidden
                rounded-2xl
                border
                bg-white
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
                "

              >


                <div className="relative h-56">

<Image
src={
  post.image && post.image.trim() !== ""
    ? post.image
    : "/images/image1.png"
}
alt={post.title}
fill
className="object-cover"
/>

                </div>




                <div className="p-6">



                  <div className="flex gap-3 text-sm">


                    <span
                      className="
                      rounded-full
                      bg-blue-100
                      px-3
                      py-1
                      text-blue-700
                      "
                    >

                      {post.category}

                    </span>




                  </div>




                  <h3 className="mt-4 text-2xl font-bold">

                    {post.title}

                  </h3>




                  <p className="mt-3 text-gray-600">

                    {post.description}

                  </p>




                  <div className="mt-4 text-sm text-gray-500">

                  {post.author} • {post.createdAt.toDateString()}

                  </div>




                  <Link

                    href={`/blog/${post.slug}`}

                    className="
                    mt-6
                    inline-block
                    font-semibold
                    text-blue-600
                    "

                  >

                    Read article →

                  </Link>



                </div>


              </article>


            ))
          }


        </div>
          
      </section>

      {/* Newsletter */}

      <section className="mt-24">

        <div className="mx-auto mb-10 max-w-3xl text-center">

          <p className="font-semibold tracking-widest text-blue-600">
            DON'T MISS NEW ARTICLES
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Join thousands of developers and business owners.
          </h2>

          <p className="mt-4 text-gray-600">
            Get practical software engineering tips, AI updates,
            and digital growth strategies delivered straight to
            your inbox.
          </p>

        </div>

       {/* <NewsLetter />*/} 

      </section>

    </main>
  );
}