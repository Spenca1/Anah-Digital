"use client";

import { useState } from "react";

export default function ReplyForm({
  id,
}: {
  id: string;
}) {
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendReply() {
    setLoading(true);

    const res = await fetch("/api/admin/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        reply,
      }),
    });

    setLoading(false);

    if (res.ok) {
      alert("Reply sent successfully!");
      setReply("");
    } else {
      alert("Failed to send reply.");
    }
  }

  return (
    <div className="space-y-5">

      <textarea
        rows={10}
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Write your reply..."
        className="w-full rounded-xl border p-4"
      />
<button
  type="button"
  onClick={sendReply}
  disabled={loading}
  className="rounded-xl bg-blue-600 px-6 py-3 text-white"
>
  {loading ? "Sending..." : "Send Reply"}
</button>

    </div>
  );
}