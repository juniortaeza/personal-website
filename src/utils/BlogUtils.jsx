import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { BlogNotes } from "../data/BlogNotes";
import { useState, useRef } from "react";

function RenderMarkdown({ mdContent, closePopup }) {
  return (
    <div className="popup-container" onClick={() => closePopup()}>
      <div className="popup-content-area" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closePopup}>
          Close
        </button>

        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{mdContent}</ReactMarkdown>
      </div>
    </div>
  );
}

function RenderBlogList({
  sortedList,
  tag,
  setMarkdownContent,
  markdownContent,
}) {
  const filteredList =
    tag === "all" ? sortedList : sortedList.filter((note) => note.tag === tag);

  return (
    <>
      {filteredList.map((note, index) => (
        <button
          key={index}
          className="blog-button"
          onClick={() => setMarkdownContent(note.markdown)}
        >
          <p style={{ display: "inline" }}>{note.date}</p> •{" "}
          <small>{note.readTime}</small>
          <h2 style={{ marginBottom: "0.5rem" }}>
            <u>{note.title}</u>
          </h2>
          <p>{note.brief}</p>
        </button>
      ))}

      {markdownContent && (
        <RenderMarkdown
          mdContent={markdownContent}
          closePopup={() => setMarkdownContent("")}
        />
      )}
    </>
  );
}

export { RenderMarkdown, RenderBlogList };
