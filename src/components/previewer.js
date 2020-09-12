import React, { useContext } from "react";

import Context from "../helpers/context";

import Toolbar from "./toolbar";

export default function Previewer(props) {
  const { isEditorExpanded, markdownText } = useContext(Context);

  return (
    <React.Fragment>
      {!isEditorExpanded ? (
        <div id="previewer-block" className="block-expanded">
          <Toolbar title="Previewer" />

          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: markdownText }}
          />
        </div>
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  );
}
