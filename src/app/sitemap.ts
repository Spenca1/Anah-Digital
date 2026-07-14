import { MetadataRoute } from "next";
import { posts } from "@/content/posts";


export default function sitemap(): MetadataRoute.Sitemap {


const baseUrl = "https://anahdigital.com";


const blogPosts = posts.map((post)=>({

url: `${baseUrl}/blog/${post.slug}`,

lastModified: new Date(),

changeFrequency: "weekly",

priority: 0.8,

}));



const categories = [

"Digital Solutions",

"Artificial Intelligence",

"Developer Journey",

].map((category)=>({

url:
`${baseUrl}/blog/category/${encodeURIComponent(category)}`,

lastModified: new Date(),

changeFrequency: "weekly",

priority: 0.7,

}));



return [

{

url: baseUrl,

lastModified: new Date(),

changeFrequency: "monthly",

priority: 1,

},


{

url: `${baseUrl}/blog`,

lastModified: new Date(),

changeFrequency: "weekly",

priority: 0.9,

},


...blogPosts,

...categories,

];


}