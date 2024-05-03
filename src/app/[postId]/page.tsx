import Link from 'next/link';

import { PostDetail } from '@/components/PostDetail';

type Props = {
  params: {
    postId: string;
  };
};

export default function Post({ params }: Props) {
  return (
    <div className="container mx-auto my-5 space-y-10">
      <Link
        href="/"
        className="bg-slate-800 text-white py-3 px-4 rounded-md hover:opacity-55 uppercase"
      >
        Back home
      </Link>
      <PostDetail postId={params.postId} />
    </div>
  );
}
