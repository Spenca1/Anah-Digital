import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(
request:Request
){


const {searchParams}=new URL(request.url);


const query =
searchParams.get("q");



if(!query){

return NextResponse.json([]);

}



const posts = await prisma.post.findMany({

where:{

published:true,

OR:[

{
title:{
contains:query,
mode:"insensitive",
},
},

{
description:{
contains:query,
mode:"insensitive",
},
},

{
content:{
contains:query,
mode:"insensitive",
},
},

{
category:{
contains:query,
mode:"insensitive",
},
},

],

},

orderBy:{

createdAt:"desc",

},

});



return NextResponse.json(posts);


}