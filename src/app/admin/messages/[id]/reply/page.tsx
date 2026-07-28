import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ReplyForm from "@/components/admin/ReplyForm";

export default async function ReplyPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;

  const message = await prisma.contactMessage.findUnique({
    where: {
      id,
    },
  });

  if (!message) {
    notFound();
  }

  return (
    
    <div className="mx-auto max-w-3xl space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Reply to Message
        </h1>

        <p className="mt-2 text-gray-500">
          {message.name}
        </p>

      </div>

      <div className="rounded-xl border p-6">

        <h2 className="font-semibold">
          Original Message
        </h2>

        <p className="mt-4 whitespace-pre-wrap">
          {message.message}
        </p>

      </div>



<ReplyForm id={message.id}/>
     
       

       

    </div>
  );
}









