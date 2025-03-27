import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import ArticleView from "./components/ArticleView/ArticleView";

const App: React.FC = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header onNewPost={() => setShowCreatePost(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <PostList
                showCreatePost={showCreatePost}
                setShowCreatePost={setShowCreatePost}
              />
            }
          />
          <Route path="/post/:id" element={<ArticleView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
