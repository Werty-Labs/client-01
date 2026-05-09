type PageSkeletonProps = {
  heading?: string;
  showHero?: boolean;
  cards?: number;
};

export function PageSkeleton({
  heading = "Loading content",
  showHero = true,
  cards = 6,
}: PageSkeletonProps) {
  return (
    <div className="animate-pulse">
      {showHero ? (
        <div className="h-[40vh] min-h-[300px] bg-secondary/60" />
      ) : null}

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="max-w-xl">
          <div className="h-3 w-28 rounded-full bg-secondary/80" />
          <div className="mt-4 h-10 w-2/3 rounded-full bg-secondary/70" />
          <div className="mt-4 h-4 w-full rounded-full bg-secondary/60" />
          <div className="mt-2 h-4 w-5/6 rounded-full bg-secondary/60" />
        </div>

        <p className="sr-only">{heading}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: cards }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-xl border bg-card shadow">
              <div className="aspect-[4/3] bg-secondary/60" />
              <div className="space-y-3 p-5">
                <div className="h-3 w-20 rounded-full bg-secondary/60" />
                <div className="h-6 w-2/3 rounded-full bg-secondary/70" />
                <div className="h-4 w-full rounded-full bg-secondary/50" />
                <div className="h-4 w-4/5 rounded-full bg-secondary/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
