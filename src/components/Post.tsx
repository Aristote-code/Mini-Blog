import React from "react";
import { useNavigate } from "react-router-dom";
import { Post as PostType } from "../types/Post";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = React.memo(({ post }) => {
  const navigate = useNavigate();
  const isNew =
    new Date().getTime() - post.datePosted.getTime() < 24 * 60 * 60 * 1000;
  const previewContent = post.content.slice(0, 100) + "...";

  return (
    <article className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          {isNew && (
            <span className="inline-block bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-md mb-2">
              New Post
            </span>
          )}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {post.title}
          </h2>
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span className="font-medium">By {post.author}</span>
        <span className="mx-2">•</span>
        <span>{post.datePosted.toLocaleDateString()}</span>
        <span className="mx-2">•</span>
        <span>5 min read</span>
      </div>
      <p className="text-gray-600">{previewContent}</p>
      <button
        onClick={() => navigate(`/post/${post.id}`)}
        className="text-blue-600 hover:text-blue-800 mt-4 font-medium"
      >
        Read More →
      </button>
    </article>
  );
});

Post.displayName = "Post";
export default Post;
