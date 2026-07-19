import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { getTours } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { BlogHero } from '@/components/blog/BlogHero';
import { AnswerBlock } from '@/components/blog/AnswerBlock';
import { BlogWhatsAppStrip } from '@/components/blog/BlogWhatsAppStrip';
import { FAQAccordion } from '@/components/blog/FAQAccordion';
import { BlogCTA } from '@/components/blog/BlogCTA';
import { buildArticleSchema, buildFaqSchema, breadcrumbJsonLd } from '@/lib/structured-data';
import { buildMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/site/json-ld';
import { BlogTracker } from '@/components/analytics/blog-tracker';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Not Found' };
  }
  return buildMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: new Date(post.date).toISOString(),
    modifiedTime: new Date(post.updatedAt).toISOString(),
  });
}

const components = {
  h1: (props: any) => (
    <h1 className="font-display1 text-4xl md:text-5xl font-bold tracking-tight text-[#0B3B24] dark:text-white mt-16 mb-6 leading-[1.1] text-balance" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="font-display1 text-3xl md:text-4xl font-bold tracking-tight text-[#0B3B24] dark:text-white mt-16 mb-6 leading-[1.15] text-balance border-b border-[#0B3B24]/10 pb-3" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-[#0B3B24] dark:text-white mt-10 mb-4 leading-[1.2]" {...props} />
  ),
  p: (props: any) => (
    <p className="font-sans text-base md:text-lg leading-[1.8] text-[#667085] dark:text-zinc-300 mb-8 max-w-[65ch] font-medium text-wrap-pretty" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-[#0B3B24] dark:text-white" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-6 mb-8 space-y-3 text-[#667085] dark:text-zinc-300 text-base md:text-lg max-w-[65ch] font-medium marker:text-[#F5A623]" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 mb-8 space-y-3 text-[#667085] dark:text-zinc-300 text-base md:text-lg max-w-[65ch] font-medium marker:text-[#F5A623]" {...props} />
  ),
  li: (props: any) => (
    <li className="pl-1 leading-[1.8]" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-[#1A6B6B] bg-[#1A6B6B]/5 py-6 pr-6 pl-8 rounded-r-3xl text-[#0B3B24] dark:text-zinc-100 font-display1 italic my-10 text-xl leading-relaxed shadow-[0_10px_30px_rgba(26,107,107,0.03)]" {...props} />
  ),
  a: (props: any) => (
    <a className="font-semibold text-[#1A6B6B] dark:text-amber-300 underline underline-offset-4 decoration-[#F5A623]/40 hover:decoration-[#F5A623] transition-colors" {...props} />
  ),
  hr: (props: any) => (
    <hr className="my-16 border-t border-black/10 dark:border-white/10" {...props} />
  ),
  img: (props: any) => (
    <div className="my-12 p-2 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 shadow-[0_24px_48px_-15px_rgba(11,59,36,0.04)]">
      <div className="overflow-hidden rounded-[calc(1rem-0.5rem)] relative w-full aspect-[16/9]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="object-cover w-full h-full" {...props} />
      </div>
    </div>
  ),
  table: (props: any) => (
    <div className="w-full overflow-x-auto my-12 rounded-2xl border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white dark:bg-zinc-900/50">
      <table className="w-full text-left border-collapse" {...props} />
    </div>
  ),
  thead: (props: any) => (
    <thead className="border-b border-black/5 dark:border-white/10 bg-[#1A6B6B]/5 dark:bg-[#1A6B6B]/10" {...props} />
  ),
  tbody: (props: any) => (
    <tbody className="divide-y divide-black/5 dark:divide-white/10" {...props} />
  ),
  tr: (props: any) => (
    <tr className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors" {...props} />
  ),
  th: (props: any) => (
    <th className="px-6 py-5 text-sm md:text-base font-semibold text-[#0B3B24] dark:text-[#F5A623] tracking-wider" {...props} />
  ),
  td: (props: any) => (
    <td className="px-6 py-5 text-sm md:text-base text-[#667085] dark:text-zinc-300 font-medium whitespace-nowrap" {...props} />
  )
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const allTours = await getTours();
  
  // 1. Explicitly related tours
  let relatedToursList = post.relatedTours 
    ? allTours.filter(t => post.relatedTours?.includes(t.slug))
    : [];

  // 2. Backfill if needed
  if (relatedToursList.length < 3) {
    const existingSlugs = new Set(relatedToursList.map(t => t.slug));
    const featuredTours = allTours.filter(t => t.featured && !existingSlugs.has(t.slug));
    const otherTours = allTours.filter(t => !t.featured && !existingSlugs.has(t.slug));
    
    const fallbacks = [...featuredTours, ...otherTours];
    const needed = 3 - relatedToursList.length;
    
    relatedToursList = [...relatedToursList, ...fallbacks.slice(0, needed)];
  }

  // Ensure exactly 3
  relatedToursList = relatedToursList.slice(0, 3);

  const articleSchema = buildArticleSchema(post);
  const faqSchema = buildFaqSchema(post);
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const schemas: any[] = [articleSchema, breadcrumbs];
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      <JsonLd data={schemas} />
      <BlogTracker />
      <article className="min-h-[100dvh] flex flex-col bg-background">
        <BlogHero title={post.title} date={post.date} image={post.image} imagePosition={post.imagePosition} />
        
        <div className="max-w-5xl mx-auto px-4 md:px-12 w-full">
          <AnswerBlock answer={post.answerSummary} />
          <BlogWhatsAppStrip />
          
          <div className="max-w-[65ch] mx-auto my-20 md:my-28">
            <MDXRemote source={post.content} components={components} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>
          
          <div className="max-w-[65ch] mx-auto mb-20 md:mb-28">
            <FAQAccordion faqs={post.faq} />
          </div>

          {relatedToursList.length > 0 && (
            <div className="mb-20 md:mb-28 w-full max-w-[1200px] mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block py-1 px-3 rounded-full bg-[#1A6B6B]/10 text-[#1A6B6B] dark:text-amber-300 font-semibold text-xs tracking-widest mb-4">
                  TAILOR-MADE FOR YOU
                </span>
                <h2 className="font-display1 text-3xl md:text-4xl font-bold tracking-tight text-[#0B3B24] dark:text-white mb-4">
                  Handpicked Tours for This Journey
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedToursList.map((tour) => (
                  <div key={tour.slug} className="group flex flex-col bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image 
                        src={tour.image || '/images/tours/placeholder.jpg'} 
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {tour.location && (
                        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0B3B24] dark:text-zinc-200 flex items-center gap-1 shadow-sm">
                          <svg className="w-3 h-3 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                          {tour.location}
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-display text-xl font-bold text-[#0B3B24] dark:text-white mb-3 line-clamp-2">
                        {tour.title}
                      </h3>
                      <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/10">
                        <Link 
                          href={`/tours/${tour.slug}`}
                          className="inline-flex items-center text-[#1A6B6B] dark:text-amber-300 font-semibold text-sm group-hover:text-[#0B3B24] dark:group-hover:text-amber-400 transition-colors"
                        >
                          Explore Tour <span className="ml-1 group-hover:translate-x-1 transition-transform">-&gt;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <BlogCTA />
        </div>
      </article>
    </>
  );
}
