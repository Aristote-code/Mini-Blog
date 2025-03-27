import React, { useState } from "react";
import Post from "./Post";
import { Post as PostType, NewPost } from "../types/Post";
import { withLogger } from "./HOCs/withLogger";
import CreatePost from "./CreatePost";
import "../styles/PostList.css";

interface PostListProps {
  showCreatePost: boolean;
  setShowCreatePost: (show: boolean) => void;
}

const initialPosts: PostType[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "Sarah Chen",
    content:
      "React Hooks are a game-changer in how we write React components. They allow us to use state and other React features without writing a class component...",
    datePosted: new Date(),
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    author: "Michael Rodriguez",
    content:
      "TypeScript has become an essential tool in modern web development. Learn about the best practices that will help you write more maintainable and scala...",
    datePosted: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: 3,
    title: "Optimizing React Performance",
    author: "Emma Wilson",
    content:
      "Performance optimization is crucial for creating smooth user experiences. In this post, we'll dive into various techniques to optimize your React appl...",
    datePosted: new Date(Date.now() - 48 * 60 * 60 * 1000),
  },
];

const PostList: React.FC<PostListProps> = ({
  showCreatePost,
  setShowCreatePost,
}) => {
  const [posts, setPosts] = useState<PostType[]>(initialPosts);

  const handleCreatePost = (newPost: NewPost) => {
    const post: PostType = {
      ...newPost,
      id: posts.length + 1,
      datePosted: new Date(),
    };
    setPosts([post, ...posts]);
    setShowCreatePost(false);
  };

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
      {showCreatePost && (
        <CreatePost
          onSubmit={handleCreatePost}
          onClose={() => setShowCreatePost(false)}
        />
      )}
    </>
  );
};

export default withLogger(PostList);
