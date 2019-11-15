import React, { useState, useRef, useEffect } from "react";
import plus from "./plus-solid.svg";
import minus from "./minus-solid.svg";

const Accordion = props => {
  console.log("props", props);
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };

  // const titleStyle = {
  //   fontWeight: 500,
  //   fontSize: "14px"
  // {/* style={titleStyle} */}
  // };

  return (
    <div
      className={"faq " + (active ? "open" : "")}
      onClick={toogleActive}
    >
      <div className="accordion-title">{props.title}</div>
      <div className="accordion-content" ref={contentRef}>
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
