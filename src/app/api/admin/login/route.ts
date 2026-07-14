import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth";


export async function POST(
request:Request
){


const {
email,
password
}=await request.json();




const admin = await prisma.admin.findUnique({

where:{
email,
},

});



if(!admin){

return NextResponse.json(

{
error:"Invalid credentials"
},

{
status:401
}

);

}




const passwordMatch = await bcrypt.compare(

password,

admin.password

);



if(!passwordMatch){

return NextResponse.json(

{
error:"Invalid credentials"
},

{
status:401
}

);

}




const response = NextResponse.json({

success:true,

});



const token = await createSession(admin.id);

response.cookies.set(
  "admin_session",
  token,
  {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  }
);



return response;


}