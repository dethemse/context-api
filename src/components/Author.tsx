import { PostCategory } from '@/components/PostCategory';
import { PostList } from '@/components/PostList';

export const Author = () => {
  return (
    <section className="my-2">
      <h1 className="text-5xl font-bold">John Doe</h1>
      <div className="my-5 space-y-6">
        <PostCategory />
        <div className="my-52 h-0.5 bg-slate-500/50" />
        <PostList />
      </div>
    </section>
  );
};
