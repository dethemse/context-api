import { Post } from '@/types/Post';
import { PostCategory } from '@/components/PostCategory';
import { PostList } from '@/components/PostList';

type Props = {
  posts: Post[];
  categories: Post['category'][];
};

export const Author = ({ categories, posts }: Props) => {
  return (
    <section className="my-2">
      <h1 className="text-5xl font-bold">John Doe</h1>
      <div className="my-5 space-y-6">
        <PostCategory categories={categories} />
        <div className="my-52 h-0.5 bg-slate-500/50" />
        <PostList posts={posts} />
      </div>
    </section>
  );
};
