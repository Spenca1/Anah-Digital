import { prisma } from "@/lib/prisma";
import LogoutSessionButton from "@/components/LogoutSessionButton";
import LogoutOtherDevicesButton from "@/components/LogoutOtherDevicesButton";
import DeviceInfo from "@/components/DeviceInfo";


export default async function SessionsPage() {
  const sessions = await prisma.session.findMany({
    orderBy: {
      lastActive: "desc",
    },
    include: {
      admin: true,
    },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Active Sessions
      </h1>

      <LogoutOtherDevicesButton />

      <div className="mb-6">
  <button
    id="logout-other-devices"
    className="rounded-lg bg-red-600 px-5 py-3 text-white transition hover:bg-red-700"
  >
    Logout Other Devices
  </button>
</div>

      {sessions.map((session) => (
  <div
    key={session.id}
    className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
  >
    <h2 className="text-xl font-semibold">
      {session.admin.email}
    </h2>

    <p className="mt-3">
      <DeviceInfo
        userAgent={session.userAgent}
      />
    </p>

    <p className="mt-2">
      🌍 IP Address:{" "}
      {session.ipAddress ?? "Unknown"}
    </p>

    <p className="mt-2">
      🕒 Last Active:{" "}
      {session.lastActive.toLocaleString()}
    </p>

    <p className="mt-2">
      ⏳ Expires:{" "}
      {session.expiresAt.toLocaleString()}
    </p>

    <div className="mt-5">
      <LogoutSessionButton
        sessionId={session.id}
      />
    </div>
  </div>
))}
</div>
  )};