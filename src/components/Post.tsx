import React from 'react';
import { withLogging } from '../hoc/withLogging';
import { Post as PostType } from '../types';
import { Clock, ChevronRight } from 'lucide-react';

interface PostProps {
  post: PostType;
  onReadMore: (id: string) => void;
}

const Post: React.FC<PostProps> = React.memo(({ post, onReadMore }) => {
  const isRecent = (dateString: string) => {
    const postDate = new Date(dateString);
    const now = new Date();
    const diffHours = (now.getTime() - postDate.getTime()) / (1000 * 60 * 60);
    return diffHours <= 24;
  };

  const previewContent = post.content.slice(0, 150) + '...';

  return (
    <article
      className={`p-6 rounded-lg shadow-md mb-6 transition-all duration-300 hover:shadow-lg ${
        isRecent(post.date) ? 'bg-blue-50' : 'bg-white'
      }`}
    >
      {isRecent(post.date) && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-blue-800 bg-blue-100 mb-4">
          New Post
        </span>
      )}
      <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer" onClick={() => onReadMore(post.id)}>
        {post.title}
      </h2>
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <span className="mr-4">By {post.author}</span>
        <time className="mr-4">{new Date(post.date).toLocaleDateString()}</time>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>{post.readTime || '5 min read'}</span>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{previewContent}</p>
      <div className="flex items-center">
        <button
          onClick={() => onReadMore(post.id)}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Read More
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </article>
  );
});

Post.displayName = 'Post';

export default withLogging(Post, 'Post');