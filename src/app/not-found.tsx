import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display1 text-7xl font-bold">404</h1>
      <p className="mt-3 text-muted-foreground">This page does not exist.</p>
      <Button asChild className="mt-6">
        <Link href="/" prefetch>
          Go home
        </Link>
      </Button>
    </div>
  );
}
