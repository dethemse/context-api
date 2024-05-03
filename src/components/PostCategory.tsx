type Props = {
  categories: string[];
};

export const PostCategory = ({ categories }: Props) => {
  return (
    <div className="space-y-6">
      <p className="text-3xl">Categories</p>
      <div className="text-xl flex gap-x-4">
        {categories.map((category) => (
          <p key={category}>{category}</p>
        ))}
      </div>
    </div>
  );
};
