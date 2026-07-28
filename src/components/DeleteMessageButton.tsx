"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function DeleteMessageButton({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  async function deleteMessage() {
    const confirmed = confirm(
      "Delete this message permanently?"
    );

    if (!confirmed) return;

    await fetch(
      "/api/admin/messages/delete",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      }
    );

    router.refresh();
  }

  return (
    <button
      onClick={deleteMessage}
      className="
      flex
      items-center
      gap-2
      rounded-lg
      bg-red-600
      px-4
      py-2
      text-sm
      font-medium
      text-white
      transition
      hover:bg-red-700
      "
    >
      <Trash2 size={16} />

      Delete
    </button>
  );
}