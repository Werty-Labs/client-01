"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

type RouteErrorStateProps = {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
};

export function RouteErrorState({
  error,
  reset,
  title = "Something went wrong",
}: RouteErrorStateProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-3xl">{title}</h1>
      <p className="mt-3 max-w-lg text-sm text-muted-foreground">
        {error.message || "The page could not be rendered. Please try again."}
      </p>
      <Button className="mt-6" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
