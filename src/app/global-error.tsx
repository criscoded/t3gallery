"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
          <h1 className="text-4xl font-bold mb-4 italic font-serif">Something went wrong</h1>
          <p className="text-lg text-foreground/60 mb-8 max-w-md text-center">
            A global error has occurred. We have been notified and are working on a fix.
          </p>
          <button
            onClick={() => reset()}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all shadow-xl"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
