import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";


const prisma = new PrismaClient();


async function main(){


const adminPassword =
  process.env.ADMIN_PASSWORD;

if (!adminPassword) {
  throw new Error(
    "ADMIN_PASSWORD is not set in the environment."
  );
}

const adminEmail = process.env.ADMIN_EMAIL;

if (!adminEmail || !adminPassword) {
  throw new Error(
    "ADMIN_EMAIL or ADMIN_PASSWORD is missing."
  );
}



const password = await bcrypt.hash(
  adminPassword,
  10
);

const admin = await prisma.admin.upsert({
  where: {
    email: adminEmail,
  },

  update: {
    password,
  },

  create: {
    email: adminEmail,
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