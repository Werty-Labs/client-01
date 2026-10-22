import Link from 'next/link';

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function AuthorBox({
  author,
  bio,
  updatedAt,
}: {
  author: string;
  bio?: string;
  updatedAt: string;
}) {
  if (!author) return null;

  return (
    <aside
      aria-label="About the author"
      className="max-w-[65ch] mx-auto mb-20 md:mb-28 rounded-2xl border border-black/10 dark:border-white/10 bg-card p-6 md:p-8"
    >
      <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#1A6B6B] dark:text-amber-300">
        About the author
      </p>
      <p className="mt-3 font-display text-xl font-semibold text-[#0B3B24] dark:text-white">
        {author}
      </p>
      {bio && (
        <p className="mt-2 text-base leading-relaxed text-[#667085] dark:text-zinc-300">
          {bio}
        </p>
      )}
      <p className="mt-4 text-sm text-[#667085] dark:text-zinc-400">
        Last updated{' '}
        <time dateTime={new Date(updatedAt).toISOString()}>{formatDate(updatedAt)}</time>
        {' · '}
        <Link href="/about" className="font-semibold text-[#1A6B6B] dark:text-amber-300 underline underline-offset-4">
          More about our team
        </Link>
      </p>
    </aside>
  );
}
