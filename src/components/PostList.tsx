'use client';

import { usePosts } from '@/providers/PostProvider';
import { PostCard } from './PostCard';

export const PostList = () => {
  const { posts } = usePosts();

  return (
    <div className="grid grid-cols-4 gap-12">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
