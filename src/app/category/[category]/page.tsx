import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

type Post = Awaited<
  ReturnType<typeof prisma.post.findMany>
>[number];

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const { category } = await params;

  const decodedCategory = decodeURIComponent(category);

  console.log("RAW CATEGORY:", category);
  console.log("DECODED CATEGORY:", decodedCategory);

  const posts: Post[] = await prisma.post.findMany({
    where: {
      published: true,

      category: {
        equals: decodedCategory,
        mode: "insensitive",
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  console.log("FOUND POSTS:", posts.length);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <main
      className="
        px-8
        py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-5xl
        "
      >
        <h1>{decodedCategory}</h1>

        <p
          className="
            mt-3
            text-gray-500
          "
        >
          Articles about {decodedCategory}
        </p>

        <div
          className="
            mt-10
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {posts.map((post: Post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              className="
                rounded-2xl
                border
                p-6
                hover:shadow-lg
                transition
              "
            >
              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                {post.title}
              </h2>

              <p
                className="
                  mt-3
                  text-gray-600
                "
              >
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}