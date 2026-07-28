"use client";

import { useRouter } from "next/navigation";

export default function MarkAsReadButton({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  async function markRead() {
    await fetch("/api/admin/messages/read", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    router.refresh();
  }

  return (
    <button
      onClick={markRead}
      className="
      rounded-lg
      bg-blue-600
      px-4
      py-2
      text-sm
      font-medium
      text-white
      transition
      hover:bg-blue-700
      "
    >
      Mark as Read
    </button>
  );
}