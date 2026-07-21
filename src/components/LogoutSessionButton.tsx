"use client";


import { useRouter } from "next/navigation";

interface LogoutSessionButtonProps {
  sessionId: string;
}

export default function LogoutSessionButton({
  sessionId,
}: LogoutSessionButtonProps) {
  const router = useRouter();

  async function logoutSession() {
    const confirmed = confirm(
      "Are you sure you want to log out this session?"
    );

    if (!confirmed) return;

    const response = await fetch(
      `/api/admin/sessions/${sessionId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      router.refresh();
    } else {
      alert("Failed to log out session.");
    }
  }

  return (
    <button
      onClick={logoutSession}
      className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
    >
      Logout Session
    </button>
  );
}