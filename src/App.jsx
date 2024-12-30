import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

// Components
import Editor from "./components/Editor";
import Preview from "./components/Preview";

const App = () => {
  // Configure marked for GitHub-flavored Markdown
  marked.setOptions({
    gfm: true,
    breaks: true, // Optional: Enable line breaks for newlines
  });

  const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '' && lastLine == '') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here...
And here. | Okay. | I think we get it.

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [isEditorExpanded, setEditorExpanded] = useState(false);
  const [isPreviewExpanded, setPreviewExpanded] = useState(false);

  const handleChange = (e) => setMarkdown(e.target.value);

  const toggleEditor = () => setEditorExpanded((prev) => !prev);
  const togglePreview = () => setPreviewExpanded((prev) => !prev);

  return (
    <div
      className={`App ${
        isEditorExpanded
          ? "editor-expanded"
          : isPreviewExpanded
          ? "preview-expanded"
          : ""
      }`}
    >
      {!isPreviewExpanded && (
        <Editor
          markdown={markdown}
          handleChange={handleChange}
          isExpanded={isEditorExpanded}
          toggleEditor={toggleEditor}
        />
      )}
      {!isEditorExpanded && (
        <Preview
          markdown={marked(markdown)}
          isExpanded={isPreviewExpanded}
          togglePreview={togglePreview}
        />
      )}
    </div>
  );
};

export default App;
