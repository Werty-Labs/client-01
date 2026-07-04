import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { BlogHero } from '@/components/blog/BlogHero';
import { AnswerBlock } from '@/components/blog/AnswerBlock';
import { FAQAccordion } from '@/components/blog/FAQAccordion';
import { BlogCTA } from '@/components/blog/BlogCTA';
import { buildArticleSchema, buildFaqSchema, breadcrumbJsonLd } from '@/lib/structured-data';
import { buildMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/site/json-ld';
import { BlogTracker } from '@/components/analytics/blog-tracker';

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
    <div className="my-12 p-2 rounded-[2.5rem] bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 shadow-[0_24px_48px_-15px_rgba(11,59,36,0.04)]">
      <div className="overflow-hidden rounded-[calc(2.5rem-0.5rem)] relative w-full aspect-[16/9]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="object-cover w-full h-full" {...props} />
      </div>
    </div>
  )
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

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
          
          <div className="max-w-[65ch] mx-auto my-20 md:my-28">
            <MDXRemote source={post.content} components={components} />
          </div>
          
          <div className="max-w-[65ch] mx-auto mb-20 md:mb-28">
            <FAQAccordion faqs={post.faq} />
          </div>

          <BlogCTA />
        </div>
      </article>
    </>
  );
}
