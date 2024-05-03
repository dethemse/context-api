'use client';

import { usePostById } from '@/providers/PostProvider';

type Props = {
  postId: string;
};

export const PostDetail = ({ postId }: Props) => {
  const { post } = usePostById(postId);

  if (!post) return <p className="text-xl text-center p-5">Post not found</p>;

  return (
    <div className="text-3xl">
      <p>Name: {post.name}</p>
      <p>Sku: {post.id}</p>
      <p>Category: {post.category}</p>
    </div>
  );
};
