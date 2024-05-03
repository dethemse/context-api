'use client';

import { Post } from '@/types/Post';
import { PropsWithChildren, useContext, useState } from 'react';

import { createContext } from 'react';

type State = {
  posts: Post[];
  addPost: (post: Post) => void;
};

export const PostContext = createContext<State | null>(null);

type Props = PropsWithChildren<{
  posts: Post[];
}>;

export const PostProvider = ({ posts, children }: Props) => {
  const [postsNext, setPostsNext] = useState(posts);

  const handleAddPost = (post: Post) => {
    setPostsNext((prev) => [...prev, post]);
  };

  return (
    <PostContext.Provider value={{ posts: postsNext, addPost: handleAddPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = (): State => {
  const state = useContext(PostContext);

  if (!state) {
    throw new Error('usePosts must be within PostProvider');
  }

  return state;
};

type PostState = State['posts'][number];

export const usePostById = (
  postId: string
): { post: PostState | undefined } => {
  const { posts } = usePosts();

  const post = posts.find((item) => item.id.toString() === postId);

  return { post };
};

type Category = PostState['category'];

export const usePostsCategories = (): {
  categories: Category[];
} => {
  const { posts } = usePosts();

  const categories = posts.map((post) => post.category);

  return { categories };
};
