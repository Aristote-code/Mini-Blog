import React, { useState } from "react";
import Post from "../Post/Post";
import { Post as PostType } from "../../types/Post";
import { withLogger } from "../../HOCs/withLogger";
import CreatePost from "../CreatePost/CreatePost";
import "./PostList.css";

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
      "React Hooks are a game-changer in how we write React components...",
    datePosted: new Date(),
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    author: "Michael Rodriguez",
    content:
      "TypeScript has become an essential tool in modern web development...",
    datePosted: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

const PostList: React.FC<PostListProps> = ({
  showCreatePost,
  setShowCreatePost,
}) => {
  const [posts, setPosts] = useState<PostType[]>(initialPosts);

  const handleNewPost = (newPost: Omit<PostType, "id" | "datePosted">) => {
    const post: PostType = {
      ...newPost,
      id: posts.length + 1,
      datePosted: new Date(),
    };
    setPosts([post, ...posts]);
    setShowCreatePost(false);
  };

  return (
    <div className="post-list">
      <div className="post-list-container">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      {showCreatePost && (
        <CreatePost
          onSubmit={handleNewPost}
          onClose={() => setShowCreatePost(false)}
        />
      )}
    </div>
  );
};

export default withLogger(PostList);
