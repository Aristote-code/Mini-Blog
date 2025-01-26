// Post interface defining the structure of a blog post
export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  readTime?: string;
  tags?: string[];
}

// HOC props interface
export interface WithLoggingProps {
  componentName: string;
}