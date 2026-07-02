import { getAllPosts } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { buildMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/site/json-ld';
import { breadcrumbJsonLd, collectionPageJsonLd } from '@/lib/structured-data';

export const metadata = buildMetadata({
  title: 'Blog',
  description: 'Read the latest travel insights, guides, and itineraries for Sri Lanka from our local experts.',
  path: '/blog',
});

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <JsonLd
        data={[
          collectionPageJsonLd("Blog", "/blog", posts),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <div className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-4xl">
          <span className="inline-block rounded-full px-3 py-1 bg-muted text-[10px] uppercase tracking-[0.2em] font-medium mb-6 text-foreground">
            Travel Journal
          </span>
          <h1 className="font-display1 text-5xl md:text-7xl font-bold tracking-tighter leading-none text-foreground text-balance">
            Sri Lanka Travel Guides & Insider Secrets
          </h1>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {posts.map((post, index) => {
            // Asymmetric pattern: First item takes 8 cols, second takes 4 cols, etc.
            let colSpan = 'md:col-span-4';
            if (index % 5 === 0) colSpan = 'md:col-span-8'; // Large hero card
            else if (index % 5 === 1) colSpan = 'md:col-span-4'; // Side card
            else if (index % 5 === 2) colSpan = 'md:col-span-4';
            else if (index % 5 === 3) colSpan = 'md:col-span-8'; // Alternate large card
            else colSpan = 'md:col-span-12'; // Full width breaker

            return (
              <div key={post.slug} className={`${colSpan}`}>
                <BlogCard post={post} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
