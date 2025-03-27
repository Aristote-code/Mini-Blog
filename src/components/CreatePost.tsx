import React, { useState } from "react";
import { NewPost } from "../types/Post";
import "../styles/CreatePost.css";

interface CreatePostProps {
  onSubmit: (post: NewPost) => void;
  onClose: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onSubmit, onClose }) => {
  const [post, setPost] = useState<NewPost>({
    title: "",
    author: "",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="text-xl font-semibold">Create New Post</h2>
          <button onClick={onClose} className="close-button">
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="post-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={post.author}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              required
              className="form-textarea"
              rows={5}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-button">
              Create Post
            </button>
            <button type="button" onClick={onClose} className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
