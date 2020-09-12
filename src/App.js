import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./helpers/fontAwesome";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Context from "./helpers/context";
import { defaultText } from "./default-text/text";

import BlockContainer from "./components/blockContainer";

const marked = require("marked");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: defaultText,
      markdownText: marked(defaultText),
      isEditorExpanded: false,
      isPreviewerExpanded: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleShrink = this.handleShrink.bind(this);
  }

  handleChange(event) {
    this.setState({
      textInput: event.target.value,
      markdownText: marked(event.target.value)
    });
  }

  handleExpand(event) {
    const blockName = event.target.id.toLowerCase();
    blockName === "editor"
      ? this.setState({
          isEditorExpanded: true,
          isPreviewerExpanded: false
        })
      : this.setState({
          isEditorExpanded: false,
          isPreviewerExpanded: true
        });
  }

  handleShrink() {
    this.setState({
      isEditorExpanded: false,
      isPreviewerExpanded: false
    });
  }

  render() {
    let handleChange = this.handleChange;
    let handleExpand = this.handleExpand;
    let handleShrink = this.handleShrink;
    let isEditorExpanded = this.state.isEditorExpanded;
    let isPreviewerExpanded = this.state.isPreviewerExpanded;
    let markdownText = this.state.markdownText;
    let textInput = this.state.textInput;

    return (
      <Context.Provider
        value={{
          FontAwesomeIcon,
          handleChange,
          handleExpand,
          handleShrink,
          isEditorExpanded,
          isPreviewerExpanded,
          markdownText,
          textInput
        }}
      >
        <div id="main-window">
          <BlockContainer />
        </div>
      </Context.Provider>
    );
  }
}
