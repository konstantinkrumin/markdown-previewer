(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},24:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),d=n.n(i),l=n(8),o=n(9),s=n(2),c=n(13),h=n(12),u=n(10),m=n(3),E=n(5),p=n(11);m.b.add(E.a,E.b,p.a);n(24),n(25);var x=r.a.createContext(),v="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://i.imgur.com/ow9mzRV.png)";function b(e){var t=Object(a.useContext)(x),n=t.FontAwesomeIcon,i=t.isEditorExpanded,d=t.isPreviewerExpanded,l=t.handleShrink,o=t.handleExpand;return r.a.createElement("div",{className:"toolbar"},r.a.createElement("div",{className:"toolbar-title"},r.a.createElement(n,{icon:["fab","free-code-camp"]})," ",e.title),i||d?r.a.createElement(n,{icon:["fas","compress-alt"],id:e.title,onClick:l,className:"button"}):r.a.createElement(n,{icon:["fas","expand-arrows-alt"],id:e.title,onClick:o,className:"button"}))}function w(e){var t=Object(a.useContext)(x),n=t.handleChange,i=t.isEditorExpanded,d=t.isPreviewerExpanded,l=t.textInput;return r.a.createElement(r.a.Fragment,null,i&&!d?r.a.createElement("div",{id:"editor-block",className:"block-expanded",style:{height:"100vh"}},r.a.createElement(b,{title:"Editor"}),r.a.createElement("textarea",{id:"editor",defaultValue:l,onChange:n,style:{height:"100%"}})):!i&&d?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{id:"editor-block",className:"block-default"},r.a.createElement(b,{title:"Editor"}),r.a.createElement("textarea",{id:"editor",defaultValue:l,onChange:n})))}function f(e){var t=Object(a.useContext)(x),n=t.isEditorExpanded,i=t.markdownText;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{id:"previewer-block",className:"block-expanded"},r.a.createElement(b,{title:"Previewer"}),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:i}})))}function k(){return r.a.createElement("div",{id:"block-container"},r.a.createElement(w,null),r.a.createElement(f,null))}var g=n(26),C=function(e){Object(c.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={textInput:v,markdownText:g(v),isEditorExpanded:!1,isPreviewerExpanded:!1},e.handleChange=e.handleChange.bind(Object(s.a)(e)),e.handleExpand=e.handleExpand.bind(Object(s.a)(e)),e.handleShrink=e.handleShrink.bind(Object(s.a)(e)),e}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState({textInput:e.target.value,markdownText:g(e.target.value)})}},{key:"handleExpand",value:function(e){"editor"===e.target.id.toLowerCase()?this.setState({isEditorExpanded:!0,isPreviewerExpanded:!1}):this.setState({isEditorExpanded:!1,isPreviewerExpanded:!0})}},{key:"handleShrink",value:function(){this.setState({isEditorExpanded:!1,isPreviewerExpanded:!1})}},{key:"render",value:function(){var e=this.handleChange,t=this.handleExpand,n=this.handleShrink,a=this.state.isEditorExpanded,i=this.state.isPreviewerExpanded,d=this.state.markdownText,l=this.state.textInput;return r.a.createElement(x.Provider,{value:{FontAwesomeIcon:u.a,handleChange:e,handleExpand:t,handleShrink:n,isEditorExpanded:a,isPreviewerExpanded:i,markdownText:d,textInput:l}},r.a.createElement("div",{id:"main-window"},r.a.createElement(k,null)))}}]),n}(r.a.Component),y=document.getElementById("root");d.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),y)}},[[14,1,2]]]);
//# sourceMappingURL=main.7245e1a4.chunk.js.map