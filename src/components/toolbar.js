import React, { useContext } from "react";

import Context from "../helpers/context";

export default function Toolbar(props) {
  const {
    FontAwesomeIcon,
    isEditorExpanded,
    isPreviewerExpanded,
    handleShrink,
    handleExpand
  } = useContext(Context);

  return (
    <div className="toolbar">
      <div className="toolbar-title">
        <FontAwesomeIcon icon={["fab", "free-code-camp"]} /> {props.title}
      </div>
      {isEditorExpanded || isPreviewerExpanded ? (
        <FontAwesomeIcon
          icon={["fas", "compress-alt"]}
          id={props.title}
          onClick={handleShrink}
          className="button"
        />
      ) : (
        <FontAwesomeIcon
          icon={["fas", "expand-arrows-alt"]}
          id={props.title}
          onClick={handleExpand}
          className="button"
        />
      )}
    </div>
  );
}
