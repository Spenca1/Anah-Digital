"use client";

import { useEffect, useState } from "react";

import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

import { FiLink } from "react-icons/fi";

interface SocialShareProps {
  title: string;
}

export default function SocialShare({
  title,
}: SocialShareProps) {

  const [url, setUrl] = useState("");

useEffect(() => {
  setUrl(window.location.href);
}, []);

  function copyLink() {
    navigator.clipboard.writeText(url);

    alert("✅ Link copied successfully");
  }

  return (

    <div className="mt-14 border-t pt-10">

      <h3 className="mb-5 text-lg font-semibold">

        Share this article

      </h3>

      <div className="flex flex-wrap gap-4">

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          className="rounded-xl bg-[#0A66C2] p-4 text-white transition hover:scale-110"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`}
          target="_blank"
          className="rounded-xl bg-black p-4 text-white transition hover:scale-110"
        >
          <FaTwitter size={22} />
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          className="rounded-xl bg-[#1877F2] p-4 text-white transition hover:scale-110"
        >
          <FaFacebook size={22} />
        </a>

        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `${title} ${url}`
          )}`}
          target="_blank"
          className="rounded-xl bg-[#25D366] p-4 text-white transition hover:scale-110"
        >
          <FaWhatsapp size={22} />
        </a>

        <button
          onClick={copyLink}
          className="rounded-xl border p-4 transition hover:bg-blue-600 hover:text-white"
        >
          <FiLink size={22} />
        </button>

      </div>

    </div>

  );

}