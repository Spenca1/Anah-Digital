"use client";

import { useState } from "react";


export default function Newsletter() {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setStatus("");


    try {

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });


      const data = await response.json();




      if (
  response.ok &&
  typeof window.gtag === "function"
) {

  console.log("Sending analytics event");


  window.gtag(
    "event",
    "newsletter_signup",
    {
      method: "newsletter_form",
      debug_mode: true,
    }
);


}
else {

  console.log("Analytics not loaded");

}
      if (!response.ok) {
        throw new Error(data.message);
      }


      setStatus("🎉 You're subscribed! Welcome to the community.");
      setEmail("");


    } catch (error) {

      setStatus(
        "You're a subscribed User. Thank you"
      );

    } finally {

      setLoading(false);

    }
  }


  return (
    <section className="mt-20 rounded-3xl bg-gray-900 px-8 py-14 text-center text-white">


      <h2 className="text-3xl font-bold">
        Build smarter with technology 🚀
      </h2>


      <p className="mx-auto mt-4 max-w-xl text-gray-300">
        Join Nigerian founders, developers,
        and businesses learning how to use
        digital solutions to grow.

        <br/> Subscribe to my Articles Newsletter 
      </p>


      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
      >

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
          flex-1 rounded-lg px-4 py-3 
          text-black outline-none
          focus:ring-2 focus:ring-white border border-white
          "
          required
        />


        <button
          disabled={loading}
          type="submit"
          className="
          rounded-lg bg-white px-6 py-3 
          font-semibold text-black
          transition hover:bg-gray-200
          disabled:cursor-not-allowed
          disabled:opacity-50
          "
        >

          {loading ? "Joining..." : "Subscribe"}

        </button>


      </form>


      {status && (
        <p className="mt-5 text-sm text-gray-200">
          {status}
        </p>
      )}


    </section>
  );
}