import Link from "next/link";

export default function RelatedPosts({
  posts,
}: {
  posts: any[];
}) {

  return (
    <section className="mt-20">

      <h2 className="text-3xl font-bold">
        Related Articles
      </h2>


      <div className="mt-8 grid gap-6 md:grid-cols-2">

        {posts.map((post) => (

          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-xl border p-6 transition hover:shadow-lg"
          >

            <h3 className="text-xl font-bold">
              {post.title}
            </h3>


            <p className="mt-3 text-gray-600">
              {post.description}
            </p>


          </Link>

        ))}

      </div>

    </section>
  );
}