import { prisma } from "@/lib/prisma";
import MarkAsReadButton from "@/components/MarkAsReadButton";
import DeleteMessageButton from "@/components/DeleteMessageButton";
import Link from "next/link";

export default async function MessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  type Message = (typeof messages)[number];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Contact Messages
        </h1>

        <p className="mt-2 text-gray-500">
          Messages received from your portfolio.
        </p>
      </div>

      <div className="space-y-5">
        {messages.length === 0 && (
          <div className="rounded-xl border p-8 text-center">
            No messages yet.
          </div>
        )}

        {messages.map((message: Message) => (
          <div
            key={message.id}
            className="rounded-2xl border p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  {message.name}
                </h2>

                <p className="text-gray-500">
                  {message.email}
                </p>
              </div>

              {!message.isRead && (
                <div className="flex items-center gap-3">
                  <span
                    className="
                      rounded-full
                      bg-blue-600
                      px-3
                      py-1
                      text-sm
                      text-white
                    "
                  >
                    Unread
                  </span>

                  <MarkAsReadButton id={message.id} />
                </div>
              )}
            </div>

            <h3 className="mt-6 font-semibold">
              {message.subject}
            </h3>

            <p className="mt-3 whitespace-pre-wrap text-gray-600">
              {message.message}
            </p>

            <p className="mt-6 text-sm text-gray-400">
              {message.createdAt.toLocaleString()}
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <DeleteMessageButton id={message.id} />

              <Link
                href={`/admin/messages/${message.id}/reply`}
                className="
                  rounded-lg
                  bg-green-600
                  px-4
                  py-2
                  text-white
                  hover:bg-green-700
                "
              >
                Reply
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}