import Link from 'next/link';

import { posts } from '@/mock/posts';

type Props = {
  params: {
    postId: string;
  };
};

export default function Post({ params }: Props) {
  const post = posts.find((item) => item.id.toString() === params.postId);

  if (!post) return <p className="text-xl text-center p-5">Post not found</p>;

  return (
    <div className="container mx-auto my-5 space-y-10">
      <Link
        href="/"
        className="bg-slate-800 text-white py-3 px-4 rounded-md hover:opacity-55 uppercase"
      >
        Back home
      </Link>
      <div className="text-3xl">
        <p>Name: {post.name}</p>
        <p>Sku: {post.id}</p>
        <p>Category: {post.category}</p>
      </div>
    </div>
  );
}
