export function calculateReadingTime(text?: string | null) {
  if (!text) return "1 min read";

  const plainText = text
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = plainText.split(" ").length;

  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}