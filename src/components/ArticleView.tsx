import React from 'react';
import { Post } from '../types';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

interface ArticleViewProps {
  post: Post;
  onBack: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ post, onBack }) => {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Posts
      </button>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex items-center text-sm text-gray-600 mb-8 space-x-6">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <time>{new Date(post.date).toLocaleDateString()}</time>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{post.readTime || '5 min read'}</span>
          </div>
          <span>By {post.author}</span>
        </div>

        {post.tags && (
          <div className="flex gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-medium text-blue-600 bg-blue-50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ArticleView;