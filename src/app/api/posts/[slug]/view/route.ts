import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(
request: Request,
{
params,
}: {
params: Promise<{
slug:string;
}>;
}

){


try {


const { slug } = await params;



const post = await prisma.post.update({

where:{

slug,

},


data:{

views:{

increment:1,

},

},

});



return NextResponse.json({

success:true,

views:post.views,

});



}catch(error){


console.error(error);



return NextResponse.json(

{
error:"Unable to update views"
},

{
status:500
}

);


}

}