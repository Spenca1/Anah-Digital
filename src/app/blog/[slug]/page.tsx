import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import Image from "next/image";
import RelatedPosts from "@/components/RelatedPosts";
import Newsletter from "@/components/NewsLetter";
import sanitizeHtml from "sanitize-html";
import ViewCounter from "@/components/ViewCounter";
import { calculateReadingTime } from "@/lib/readingTime";
import ReadingProgress from "@/components/ReadingProgress";
import SocialShare from "@/components/SocialShare";
import ClapButton from "@/components/ClapButton";
import { siteConfig } from "@/lib/site";





const fallbackImage = "/images/logo3.png";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {


  const { slug } = await params;


  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });


  if (!post) {

    return {
      title: "Article not found",
    };

  }


  const image =
    post.image && post.image.trim() !== ""
      ? post.image
      : fallbackImage;



  return {
  title: post.seoTitle || post.title,

  description:
    post.seoDescription || post.description,

  alternates: {
    canonical: `${siteConfig.url}/blog/${post.slug}`,
  },

  openGraph: {
    title:
      post.seoTitle || post.title,

    description:
      post.seoDescription || post.description,

    url: `${siteConfig.url}/blog/${post.slug}`,

    siteName: siteConfig.name,

    type: "article",

    publishedTime: post.createdAt.toISOString(),

    authors: [post.author],

    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: post.imageAlt || post.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      post.seoTitle || post.title,

    description:
      post.seoDescription || post.description,

    images: [imageUrl],
  },

  robots: {
    index: true,
    follow: true,
  },
};

}




export default async function BlogPost({

  params,

}: {

  params: Promise<{ slug:string }>;

}) {


  const { slug } = await params;



  const post = await prisma.post.findUnique({

    where:{
      slug,
    },

  });



  if(!post){

    return (

      <h1 className="px-8 py-20 text-3xl font-bold">

        Article not found

      </h1>

    );

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



  const image =
    post.image && post.image.trim() !== ""
      ? post.image
      : fallbackImage;

const imageUrl = image.startsWith("http")
  ? image
  : `${siteConfig.url}${image}`;


      const articleJsonLd = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline: post.title,

  description: post.description,

  image: `${siteConfig.url}${image}`,

  datePublished:
    post.createdAt.toISOString(),

  dateModified:
    post.updatedAt.toISOString(),

  author: {
    "@type": "Person",

    name: post.author,
  },

  publisher: {
    "@type": "Organization",

    name: "Anah Digital",

    logo: {
      "@type": "ImageObject",

      url: `${siteConfig.url}/images/logo3.png`,
    },
  },

  mainEntityOfPage: {
    "@type": "WebPage",

    "@id":
      `${siteConfig.url}/blog/${post.slug}`,
  },
};


  return (

    <main className="px-8 py-20">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(articleJsonLd),
  }}
/>

      <ReadingProgress/> 

      <article className="mx-auto max-w-3xl">
        


<ViewCounter slug={post.slug}/>

        <div className="relative mb-10 h-96 w-full overflow-hidden rounded-2xl">


<Image
src={
  post.image?.trim()
    ? post.image
    : "/images/image2.png"
}
alt={post.title}
fill
className="object-cover"

priority
/>


        </div>




        <p className="text-blue-600">

          {post.category}

        </p>




        <h1 className="mt-4 text-5xl font-bold">

          {post.title}

        </h1>




        <p className="mt-6 text-lg text-gray-600">

          {post.description}

        </p>





        <div className="mt-6 flex gap-4 text-sm text-gray-500">


          <span>
            By {post.author}
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
           {calculateReadingTime(post.content)}
          </span>


        </div>





<div
  className="mt-10 prose prose-lg max-w-none prose-a:text-blue-600 prose-a:underline"
  dangerouslySetInnerHTML={{
    __html: sanitizeHtml(post.content),
  }}
/>
<ClapButton
  slug={post.slug}
  initialClaps={post.claps}
/>


<SocialShare title={post.title} />
        <RelatedPosts

          posts={relatedPosts}

        />



        <Newsletter />



      </article>


    </main>

  );

}