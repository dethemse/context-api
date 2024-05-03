import { Post } from '@/types/Post';
import { PostCard } from './PostCard';

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-12">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
