'use client';

import { usePostsCategories } from '@/providers/PostProvider';

export const PostCategory = () => {
  const { categories } = usePostsCategories();

  return (
    <div className="space-y-6">
      <p className="text-3xl">Categories</p>
      <div className="text-xl flex gap-x-4">
        {categories?.map((category) => (
          <p key={category}>{category}</p>
        ))}
      </div>
    </div>
  );
};
