import { prisma } from "@/lib/prisma";


import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";




export default async function Home(){


const posts = await prisma.post.findMany({

where:{
published:true,
},

orderBy:{
createdAt:"desc",
},

take:6,

});



return (

<main>


<Navbar />


<Hero />


<FeaturedPosts posts={posts}/>


<Services />


<Projects />


<About />

<Contact />

<Footer />


</main>

);

}