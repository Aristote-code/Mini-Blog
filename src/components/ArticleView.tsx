import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post as PostType } from "../types/Post";
import { withLogger } from "./HOCs/withLogger";
import "../styles/ArticleView.css";

const ArticleView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // This should be replaced with actual data fetching
  const post = {
    id: Number(id),
    title: "Understanding React Hooks",
    author: "Sarah Chen",
    content:
      "React Hooks are a game-changer in how we write React components. They allow us to use state and other React features without writing a class component. In this comprehensive guide, we'll explore the most commonly used hooks and how they can improve your React applications.\n\nuseState is perhaps the most fundamental Hook in React. It allows you to add state to functional components, making them more dynamic and interactive. The beauty of useState lies in its simplicity - it returns an array with two elements: the current state value and a function to update it.\n\nuseEffect is another essential Hook that lets you perform side effects in function components. Think of side effects as operations that can affect other components and can't be done during rendering, such as data fetching, subscriptions, or manually changing the DOM.\n\nCustom Hooks are a powerful feature that enables you to extract component logic into reusable functions. They start with 'use' and can call other Hooks, following the same rules as the built-in Hooks. This pattern promotes code reuse and helps keep your components clean and focused.",
    datePosted: new Date(),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        ← Back to Posts
      </button>
      <article className="bg-white rounded-lg p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium">By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.datePosted.toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
        </div>
        <div className="prose max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Tags:</span>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                Hooks
              </span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default withLogger(ArticleView);
