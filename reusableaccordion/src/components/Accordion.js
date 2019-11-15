import React, { useState, useRef, useEffect } from "react";

const Accordion = props => {
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

  return (
    <div className={"toggle " + (active ? "open" : "")} onClick={toogleActive}>
      <div className="accordion-title">{props.title}</div>
      <div className="accordion-content" ref={contentRef}>
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
