import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  answerSummary: string; // Used for AI Overview
  image: string;
  imagePosition?: string;
  faq?: FAQItem[];
  content: string; // Raw MDX content
}

const contentDir = path.join(process.cwd(), 'src/content/blog');

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      return getPostBySlug(slug);
    })
    .filter(Boolean) as BlogPost[];
  
  return posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(contentDir, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || '',
      date: data.date || new Date().toISOString(),
      author: data.author || '',
      summary: data.summary || '',
      answerSummary: data.answerSummary || '',
      image: data.image || '',
      imagePosition: data.imagePosition || '',
      faq: data.faq,
      content,
    };
  } catch (_error) {
    return null;
  }
}
