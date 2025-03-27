import React from "react";
import { withLogger } from "./HOCs/withLogger";
import "../styles/Header.css"; // External CSS

interface HeaderProps {
  onNewPost: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNewPost }) => {
  // Inline styles as per project requirements
  const logoStyle = {
    fontWeight: 700,
    letterSpacing: "-0.5px",
  };

  return (
    <header className="header-container">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex items-center">
          <span style={logoStyle} className="text-2xl text-gray-900">
            Dev Insights
          </span>
        </div>
        <button className="new-post-button" onClick={onNewPost}>
          + New Post
        </button>
      </div>
    </header>
  );
};

export default withLogger(Header);
