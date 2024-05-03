import { Author } from '@/components/Author';

import { posts } from '@/mock/posts';

export default function Home() {
  const categories = posts.map((post) => post.category);

  return (
    <div className="container mx-auto">
      <Author categories={categories} posts={posts} />
    </div>
  );
}
