import React from 'react';
import { BookOpen, Plus } from 'lucide-react';

interface HeaderProps {
  onNewPost: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNewPost }) => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <BookOpen className="h-8 w-8 text-blue-600 transition-transform group-hover:scale-110" />
            <h1 className="text-2xl font-bold text-gray-900">Dev Insights</h1>
          </div>
          <button
            className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
            onClick={onNewPost}
          >
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;