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
      <article className="min-h-[100dvh] flex flex-col bg-background">
        <BlogHero title={post.title} date={post.date} image={post.image} />
        
        <div className="max-w-4xl mx-auto px-4 md:px-12 w-full">
          <AnswerBlock answer={post.answerSummary} />
          
          <div className="prose prose-lg dark:prose-invert max-w-[65ch] mx-auto my-24 md:my-32 text-zinc-800 dark:text-zinc-300 [&_p]:text-wrap-pretty [&_h1]:text-wrap-balance [&_h2]:text-wrap-balance [&_h3]:text-wrap-balance prose-headings:font-display1 prose-headings:font-medium prose-headings:tracking-[-0.02em] prose-headings:text-zinc-950 dark:prose-headings:text-white prose-h2:text-4xl prose-h2:mt-24 prose-h2:mb-10 prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-6 prose-a:text-dest-teal dark:prose-a:text-amber-300 prose-a:underline-offset-4 prose-a:decoration-dest-amber/40 hover:prose-a:decoration-dest-amber prose-img:rounded-[2rem] prose-img:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)] prose-img:ring-1 prose-img:ring-black/5 dark:prose-img:ring-white/10 prose-li:marker:text-dest-amber leading-[1.8] space-y-8 prose-blockquote:border-l-4 prose-blockquote:border-l-dest-amber prose-blockquote:bg-dest-amber/5 prose-blockquote:py-4 prose-blockquote:pr-6 prose-blockquote:pl-8 prose-blockquote:rounded-r-2xl prose-blockquote:text-zinc-900 dark:prose-blockquote:text-zinc-100 prose-blockquote:font-display1 prose-blockquote:italic">
            <MDXRemote source={post.content} />
          </div>
          
          <div className="max-w-[65ch] mx-auto mb-24 md:mb-32">
            <FAQAccordion faqs={post.faq} />
          </div>

          <BlogCTA />
        </div>
      </article>
    </>
  );
}
