"use client";

import { useRouter } from "next/navigation";

export default function LogoutOtherDevicesButton() {
  const router = useRouter();

  async function logoutOthers() {
    const confirmed = confirm(
      "Log out all other devices?"
    );

    if (!confirmed) return;

    const response = await fetch(
      "/api/admin/sessions/logout-others",
      {
        method: "POST",
      }
    );

    if (response.ok) {
      router.refresh();
    } else {
      alert("Something went wrong.");
    }
  }

  return (
    <button
      onClick={logoutOthers}
      className="rounded-lg bg-red-600 px-5 py-3 text-white hover:bg-red-700"
    >
      Logout Other Devices
    </button>
  );
}