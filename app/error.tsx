"use client";

import { useEffect } from "react";
import { DEFAULT_H2, DEFAULT_P } from "./tailwind-styles";

export default function ErrorPage({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className={
        "flex min-h-screen flex-col items-center " +
        "justify-center text-foreground-dim"
      }
    >
      <h2 className={DEFAULT_H2}>Uh oh, an error occurred!</h2>
      <p className={DEFAULT_P}>Something went wrong. Please try again.</p>
      <button
        className={
          "mt-4 rounded-md bg-white/10 px-4 py-2 text-white " +
          "transition-colors hover:bg-white/20 hover:cursor-pointer"
        }
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
