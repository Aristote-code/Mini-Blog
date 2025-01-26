import React, { useState } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import ArticleView from './components/ArticleView';
import CreatePost from './components/CreatePost';
import { Post } from './types';

const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Understanding React Hooks',
    author: 'Sarah Chen',
    content: `React Hooks are a game-changer in how we write React components. They allow us to use state and other React features without writing a class component. In this comprehensive guide, we'll explore the most commonly used hooks and how they can improve your React applications.

    useState is perhaps the most fundamental Hook in React. It allows you to add state to functional components, making them more dynamic and interactive. The beauty of useState lies in its simplicity - it returns an array with two elements: the current state value and a function to update it.

    useEffect is another essential Hook that lets you perform side effects in function components. Think of side effects as operations that can affect other components and can't be done during rendering, such as data fetching, subscriptions, or manually changing the DOM.

    Custom Hooks are a powerful feature that enables you to extract component logic into reusable functions. They start with 'use' and can call other Hooks, following the same rules as the built-in Hooks. This pattern promotes code reuse and helps keep your components clean and focused.`,
    date: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    readTime: '5 min read',
    tags: ['React', 'Hooks', 'JavaScript'],
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    author: 'Michael Rodriguez',
    content: `TypeScript has become an essential tool in modern web development. Learn about the best practices that will help you write more maintainable and scalable code. We'll cover types, interfaces, and advanced TypeScript features.

    One of the most powerful features of TypeScript is its type system. Understanding how to effectively use types can greatly improve your code quality and developer experience. Start with basic types and gradually move to more complex ones as your needs evolve.

    Interfaces are a core concept in TypeScript that allow you to define contracts in your code and provide explicit names for type checking. They're particularly useful when working with objects and can help make your code more maintainable.

    Generic types are another powerful feature that enables you to write flexible, reusable code while maintaining type safety. They're especially useful when working with collections, promises, and other data structures where the type of data being handled isn't known in advance.`,
    date: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    readTime: '7 min read',
    tags: ['TypeScript', 'JavaScript', 'Development'],
  },
  {
    id: '3',
    title: 'Optimizing React Performance',
    author: 'Emma Wilson',
    content: `Performance optimization is crucial for creating smooth user experiences. In this post, we'll dive into various techniques to optimize your React applications, including code splitting, memoization, and proper state management.

    Code splitting is a technique that allows you to split your code into various bundles which can then be loaded on demand or in parallel. This can significantly improve the initial loading time of your application by reducing the size of the main bundle.

    Memoization is another powerful optimization technique that can help prevent unnecessary re-renders in your React components. React.memo and useMemo are two important tools that you can use to implement memoization in your applications.

    State management is a critical aspect of React performance. Understanding when and how to lift state up, using appropriate data structures, and implementing efficient update patterns can make a huge difference in your application's performance.`,
    date: new Date().toISOString(),
    readTime: '6 min read',
    tags: ['React', 'Performance', 'Optimization'],
  },
];

function App() {
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  const selectedPost = selectedPostId 
    ? posts.find(post => post.id === selectedPostId)
    : null;

  const handleCreatePost = (newPost: Omit<Post, 'id' | 'date'>) => {
    const post: Post = {
      ...newPost,
      id: String(posts.length + 1),
      date: new Date().toISOString(),
    };
    setPosts([post, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onNewPost={() => setIsCreatePostOpen(true)} />
      <main>
        {selectedPost ? (
          <ArticleView 
            post={selectedPost} 
            onBack={() => setSelectedPostId(null)} 
          />
        ) : (
          <PostList 
            posts={posts} 
            onReadMore={(id) => setSelectedPostId(id)} 
          />
        )}
      </main>
      {isCreatePostOpen && (
        <CreatePost
          onClose={() => setIsCreatePostOpen(false)}
          onSubmit={handleCreatePost}
        />
      )}
    </div>
  );
}

export default App;