import React from "react";
import "font-awesome/css/font-awesome.min.css";

export default function Preview({ markdown, isExpanded, togglePreview }) {
  return (
    <div className={`preview ${isExpanded ? "full-screen" : ""}`}>
      <header
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <i className="fa fa-free-code-camp"></i>
          <p>Preview</p>
        </span>
        <i
          className={`fa ${isExpanded ? "fa-compress" : "fa-arrows-alt"}`}
          onClick={togglePreview}
          style={{ cursor: "pointer" }}
        ></i>
      </header>

      <div
        id="preview"
        style={{
          width: "100%",
          height: isExpanded ? "calc(100vh - 60px)" : "300px", // Adjust height dynamically
          overflowY: "auto", // Add scroll for overflowing content
          padding: "10px",
          boxSizing: "border-box", // Include padding in width/height
          backgroundColor: "#c0d8d8", // Improve contrast and readability
          border: "1px solid #ddd", // Add border for clarity
          borderRadius: "4px", // Slight rounding for a clean look
        }}
        dangerouslySetInnerHTML={{ __html: markdown }}
      ></div>
    </div>
  );
}
