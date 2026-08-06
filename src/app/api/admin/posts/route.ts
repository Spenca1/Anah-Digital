import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {


try {
const body = await request.json();

function createUniqueSlug(slug:string){

return slug
.toLowerCase()
.trim()
.replace(/[^a-z0-9]+/g,"-")
.replace(/^-+|-+$/g,"");

}


let slug = createUniqueSlug(body.slug);

const existingPost = await prisma.post.findUnique({

where:{
slug,
},

});


if(existingPost){

let counter = 2;


while(
await prisma.post.findUnique({
where:{
slug:`${slug}-${counter}`
}
})
){

counter++;

}


slug = `${slug}-${counter}`;

}



const post = await prisma.post.create({

data:{

title: body.title,

slug, 

description: body.description,

content: body.content,

image: body.image,

category: body.category,

author: body.author,

readTime: body.readTime,

published: body.published ?? false,

}

});


return NextResponse.json(
{
success:true,
post
},
{
status:201
}
);


}

catch (error) {
  console.error("UPLOAD ERROR:", error);

  return NextResponse.json(
    {
      error: String(error),
    },
    {
      status: 500,
    }
  );
}

}
