import Link from 'next/link';

import { Post } from '@/types/Post';

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  return (
    <div className="border rounded-md p-4 min-h-52 h-full flex flex-col">
      <p className="text-2xl font-bold">{post.name}</p>
      <p className="text-xl text-gray-500">{post.category}</p>
      <Link
        href={`/${post.id}`}
        className="self-start mt-auto bg-slate-800 text-white py-3 px-4 rounded-md hover:opacity-55 uppercase"
      >
        Read More...
      </Link>
    </div>
  );
};
