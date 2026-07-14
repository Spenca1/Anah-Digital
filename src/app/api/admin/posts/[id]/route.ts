import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function PUT(
request: Request,
{
params,
}:{
params: Promise<{id:string}>
}
){

try {


const {id}=await params;


const body=await request.json();



const post=await prisma.post.update({

where:{
id,
},

data:{

title:body.title,

slug:body.slug,

description:body.description,

category:body.category,

image:body.image,

content:body.content,

author:body.author,

readTime:body.readTime,

published:body.published,

}

});



return NextResponse.json({
success:true,
post,
});


}

catch(error){

console.error(error);


return NextResponse.json(

{
success:false,
message:"Failed to update post"
},

{
status:500
}

);


}

}

export async function DELETE(
request: Request,
{
params,
}:{
params: Promise<{id:string}>
}
){

try {


const {id}=await params;



const post = await prisma.post.delete({

where:{
id,
},

});



return NextResponse.json({

success:true,
post,

});


}

catch(error){

console.error(error);



return NextResponse.json(

{
success:false,
message:"Failed to delete post",
},

{
status:500
}

);


}

}