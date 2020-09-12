import React, { useContext } from "react";

import Context from "../helpers/context";

import Toolbar from "./toolbar";

export default function Editor(props) {
  const {
    handleChange,
    isEditorExpanded,
    isPreviewerExpanded,
    textInput
  } = useContext(Context);

  return (
    <React.Fragment>
      {isEditorExpanded && !isPreviewerExpanded ? (
        <div
          id="editor-block"
          className="block-expanded"
          style={{ height: "100vh" }}
        >
          <Toolbar title="Editor" />

          <textarea
            id="editor"
            defaultValue={textInput}
            onChange={handleChange}
            style={{ height: "100%" }}
          />
        </div>
      ) : !isEditorExpanded && isPreviewerExpanded ? (
        <React.Fragment />
      ) : (
        <div id="editor-block" className="block-default">
          <Toolbar title="Editor" />

          <textarea
            id="editor"
            defaultValue={textInput}
            onChange={handleChange}
          />
        </div>
      )}
    </React.Fragment>
  );
}
