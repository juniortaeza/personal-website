import { Link } from "react-router-dom";
import "../style/index.css";
import "../style/Blog.css";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { BlogNotes } from "../data/BlogNotes";
import { RenderMarkdown, RenderBlogList } from "../utils/BlogUtils.jsx";
import { useState } from "react";

function Blog() {
  const sortedBlog = [...BlogNotes].sort((date1, date2) => {
    return new Date(date2.date) - new Date(date1.date);
  });

  const [markdownContent, setMarkdownContent] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  return (
    <div className="blog-container">
      <Link to="/about" className="nav-button back-button">
        <span>←</span> Back
      </Link>

      <div>
        <h1>tech blog & life talks</h1>
        <button className="section-button" onClick={() => setActiveTag("all")}>
          <u>all</u>
        </button>
        <button
          className="section-button"
          onClick={() => setActiveTag("omscs")}
        >
          <u>school</u>
        </button>
        <button className="section-button" onClick={() => setActiveTag("work")}>
          <u>work</u>
        </button>
        <hr />
      </div>

      <div className="blog-notes-container">
        <RenderBlogList
          sortedList={sortedBlog}
          tag={activeTag}
          setMarkdownContent={setMarkdownContent}
          markdownContent={markdownContent}
        />
      </div>
    </div>
  );
}

export default Blog;
