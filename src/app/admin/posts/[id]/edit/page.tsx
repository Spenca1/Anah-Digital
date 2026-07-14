import { prisma } from "@/lib/prisma";
import EditPostForm from "./EditPostForm";


export default async function EditPostPage({
params,
}:{
params: Promise<{id:string}>
}){


const {id}=await params;



const post = await prisma.post.findUnique({

where:{
id,
},

});



if(!post){

return (

<h1 className="px-8 py-20 text-3xl font-bold">
Post not found
</h1>

);

}



return (

<main className="px-8 py-20">


<h1 className="text-4xl font-bold">

Edit Article

</h1>


<div className="mt-10">

<EditPostForm post={post}/>

</div>


</main>

);

}