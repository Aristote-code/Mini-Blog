import React from 'react';
import { withLogging } from '../hoc/withLogging';
import { Post as PostType } from '../types';
import Post from './Post';

interface PostListProps {
  posts: PostType[];
  onReadMore: (id: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onReadMore }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {posts.map((post) => (
        <Post key={post.id} post={post} onReadMore={onReadMore} />
      ))}
    </div>
  );
};

export default withLogging(PostList, 'PostList');