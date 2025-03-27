import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Post as PostType } from "../../types/Post";
import { withLogger } from "../../HOCs/withLogger";
import "./ArticleView.css";

const ArticleView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, you'd fetch this from an API
  const post: PostType = {
    id: 1,
    title: "Understanding React Hooks",
    author: "Sarah Chen",
    content:
      "React Hooks are a game-changer in how we write React components...",
    datePosted: new Date(),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="back-button mb-6">
        ← Back to Posts
      </button>
      <article className="prose">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span className="font-medium">{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.datePosted.toLocaleDateString()}</span>
        </div>
        <p>{post.content}</p>
      </article>
    </div>
  );
};

export default withLogger(ArticleView);
