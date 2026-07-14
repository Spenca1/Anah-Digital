"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";


export default function Navbar() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    const value = query.trim();

    if (!value) return;

    router.push(`/search?q=${encodeURIComponent(value)}`);
  }

  return (
    <nav
      className={`sticky top-0 z-[50] transition-all duration-300 ${
       scrolled
  ? "backdrop-blur-2xl bg-white/70 dark:bg-neutral-950/70 border-b border-gray-200/40 dark:border-gray-800/40"
  : "bg-transparent.  shadow-xl shadow-black/5 dark:shadow-black/30 "
      }`}
    >
      {open && (
  <div
    className="
    fixed
    inset-0
    bg-black/30
    
    z-[100]
    lg:hidden
    "
    onClick={() => setOpen(false)}
  />
)}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
  href="/"
          className="text-3xl font-bold hover:text-blue-600 transition"
        >
          Anah <span className="text-blue-600">.</span>
        
</Link>
        {/* Desktop Navigation */}
       <div className="hidden lg:flex items-center gap-6 ml-16">

          <a
  href="/"
  className="
  relative
  text-sm
  font-medium
  tracking-wide
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-blue-600
  after:transition-all
  after:duration-300
  hover:text-blue-600
  hover:after:w-full
  "
>
  Home
</a>

          <a
  href="#services"
  className="
  relative
  text-sm
  font-medium
  tracking-wide
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-blue-600
  after:transition-all
  after:duration-300
  hover:text-blue-600
  hover:after:w-full
  "
>
  Services
</a>

          <a
  href="#projects"
  className="
  relative
  text-sm
  font-medium
  tracking-wide
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-blue-600
  after:transition-all
  after:duration-300
  hover:text-blue-600
  hover:after:w-full
  "
>
  Projects
</a>

         <a
  href="#about"
  className="
  relative
  text-sm
  font-medium
  tracking-wide
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-blue-600
  after:transition-all
  after:duration-300
  hover:text-blue-600
  hover:after:w-full
  "
>
  About
</a>

  <Link href="/blog"
  className="
  relative
  text-sm
  font-medium
  tracking-wide
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-blue-600
  after:transition-all
  after:duration-300
  hover:text-blue-600
  hover:after:w-full
  ">

  Blog
  </Link>

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3 ml-10">

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="
w-44
rounded-full
border
border-gray-300
bg-transparent
px-4
py-2
text-sm
outline-none
transition-all
duration-300
placeholder:text-gray-400
focus:w-56
focus:border-blue-600
focus:ring-2
focus:ring-blue-500/30
dark:border-gray-700
"
            />
          </form>

          <ThemeToggle />

<a
  href="#contact"
  className="
  rounded-xl
  bg-blue-600
  px-6
  py-3
  font-medium
  text-white
  shadow-lg
  shadow-blue-500/20
  transition-all
  duration-300
  hover:-translate-y-1
  hover:scale-105
  hover:bg-blue-700
  hover:shadow-blue-500/40
  active:scale-95
  cursor-pointer
  "
>
  Let's Talk
</a>

        </div>

        {/* Mobile Button */}
       <button
  onClick={() => setOpen(!open)}
  className="lg:hidden text-4xl"
>
  <span
  className={`
  transition-transform
  duration-300
  ${open ? "rotate-180" : ""}
`}
>
  {open ? "✕" : "☰"}
</span>
</button>

      </div>

      {/* Mobile Menu */}

{/* Mobile Menu */}



<div
  className={`
  lg:hidden
  fixed
  top-20
  left-0
  right-0
  left-0
  w-full
  z-[110]
  ${
    open
      ? "max-h-[500px] opacity-100"
      : "max-h-0 opacity-0"
  }
  bg-white/95
  dark:bg-neutral-950/95
  backdrop-blur-xl
  border-t
  shadow-xl
  `}
>


    <div className="flex flex-col p-6 space-y-5">

       <a
      href="/"
      onClick={() => setOpen(false)}
      className="
      rounded-xl
      px-4
      py-3
      font-medium
      transition-all
      hover:bg-blue-600
      hover:text-white
      "
    >
      Home
    </a>

       <a
      href="#services"
      onClick={() => setOpen(false)}
      className="
      rounded-xl
      px-4
      py-3
      font-medium
      transition-all
      hover:bg-blue-600
      hover:text-white
      "
    >
      Services
    </a>

       <a
      href="#projects"
      onClick={() => setOpen(false)}
      className="
      rounded-xl
      px-4
      py-3
      font-medium
      transition-all
      hover:bg-blue-600
      hover:text-white
      "
    >
      Projects
    </a>

      <a
      href="#about"
      onClick={() => setOpen(false)}
      className="
      rounded-xl
      px-4
      py-3
      font-medium
      transition-all
      hover:bg-blue-600
      hover:text-white
      "
    >
      About
    </a>

      
    <Link
      href="/blog"
      onClick={() => setOpen(false)}
      className="
      rounded-xl
      px-4
      py-3
      font-medium
      transition-all
      hover:bg-blue-600
      hover:text-white
      "
    >
      Blog
    </Link>

       <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
        w-full
        rounded-2xl
        border
        border-gray-300
        bg-transparent
        px-5
        py-3
        outline-none
        transition
        focus:border-blue-600
        focus:ring-2
        focus:ring-blue-500/20
        dark:border-gray-700
        "
      />
    </form>

      <div className="mt-2 flex items-center justify-between">

        <ThemeToggle />

      <a
        href="#contact"
        onClick={() => setOpen(false)}
        className="
        rounded-2xl
        bg-blue-600
        px-6
        py-3
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:bg-blue-700
        active:scale-95
        "
      >
        Let's Talk
      </a>

      </div>

    </div>
  </div>
</nav>
  )}