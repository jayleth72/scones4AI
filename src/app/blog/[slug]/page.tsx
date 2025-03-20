import { getPostBySlug } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <time className="text-gray-500">{post.date}</time>
        </header>
        
        <div className="prose lg:prose-xl max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
