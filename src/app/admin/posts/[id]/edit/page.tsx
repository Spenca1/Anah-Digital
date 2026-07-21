import { prisma } from "@/lib/prisma";
import EditPostForm from "./EditPostForm";
import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/session";

export default async function EditPostPage({
params,
}:{
params: Promise<{id:string}>
}){

const admin = await getCurrentAdmin();

if (!admin) {
  redirect("/admin/login");
}

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