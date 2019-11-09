import React from "react";

function Toggle({ title, index, toggleTitleDescription }) {
  return (
    <div
      className={"title " + (title.open ? "open" : "")}
      key={index}
      onClick={() => toggleTitleDescription(index)}
    >
      <div className="title-title">{title.title}</div>
      <div className="title-description">{title.description}</div>
    </div>
  );
}

export default Toggle;
