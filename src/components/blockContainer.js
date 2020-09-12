import React from "react";

import Editor from "./editor";
import Previewer from "./previewer";

export default function BlockContainer() {
  return (
    <div id="block-container">
      <Editor />
      <Previewer />
    </div>
  );
}
