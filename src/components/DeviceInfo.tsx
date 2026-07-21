import { UAParser } from "ua-parser-js";

interface Props {
  userAgent: string | null;
}

export default function DeviceInfo({
  userAgent,
}: Props) {
  if (!userAgent) {
    return <span>Unknown Device</span>;
  }

  const parser = new UAParser(userAgent);

  const browser =
    parser.getBrowser().name ?? "Unknown Browser";

  const os =
    parser.getOS().name ?? "Unknown OS";

  return (
    <span>
      💻 {browser} on {os}
    </span>
  );
}