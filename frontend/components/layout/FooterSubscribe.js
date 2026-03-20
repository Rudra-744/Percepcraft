"use client";

import { useState } from "react";

export default function FooterSubscribe() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900)); // replace with real API call
    setStatus("success");
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[480px] rounded-md overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
      aria-label="Newsletter subscribe"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        disabled={status !== "idle"}
        className="flex-1 min-w-0 px-4 py-3.5 text-sm bg-white text-gray-900 outline-none placeholder:text-gray-400 disabled:opacity-70"
      />
      <button
        type="submit"
        disabled={status !== "idle"}
        aria-busy={status === "loading"}
        className="px-5 py-3.5 text-[13px] font-bold tracking-wide text-white bg-[#F5A623] whitespace-nowrap transition-all duration-150 hover:bg-[#e5951a] hover:scale-[1.03] disabled:opacity-70 disabled:cursor-default"
      >
        {status === "loading"  ? "…"
         : status === "success" ? "✓ Subscribed!"
         : <>SUBSCRIBE <span aria-hidden="true">→</span></>}
      </button>
    </form>
  );
}
