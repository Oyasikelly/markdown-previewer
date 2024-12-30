import React from "react";
import "font-awesome/css/font-awesome.min.css";

export default function Editor({
  markdown,
  handleChange,
  isExpanded,
  toggleEditor,
}) {
  return (
    <div className={`editor ${isExpanded ? "full-screen" : ""}`}>
      <header>
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <i className="fa fa-free-code-camp"></i>
          <p>Editor</p>
        </span>
        <i
          className={`fa ${isExpanded ? "fa-compress" : "fa-arrows-alt"}`}
          onClick={toggleEditor}
          style={{ cursor: "pointer" }}
        ></i>
      </header>

      <textarea
        id="editor"
        style={{
          width: "100%",
          resize: "vertical",
          height: isExpanded ? "calc(100vh - 60px)" : "300px", // Adjust height dynamically
          padding: "10px",
        }}
        value={markdown}
        onChange={handleChange}
      />
    </div>
  );
}
