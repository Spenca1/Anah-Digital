import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";


const prisma = new PrismaClient();


async function main(){


const password = await bcrypt.hash(
"ChangeThisPassword123",
10
);



const admin = await prisma.admin.upsert({

where:{
email:"admin@anahdigital.com",
},


update:{},


create:{

email:"admin@anahdigital.com",

password,

},

});



console.log("Admin created:", admin.email);


}



main()

.catch((e)=>{

console.error(e);

process.exit(1);

})

.finally(async()=>{

await prisma.$disconnect();

});