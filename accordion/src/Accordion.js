import React, { useState } from "react";

import Header from "./Header";
import FAQ from "./FAQ";

function Accordion() {
  const [faqs, setfaqs] = useState([
    {
      question:
        "because your Healtcare Professional is concerned about your weight",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et..",
      open: true
    },
    {
      question: "becasue you eat a vegan diet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et.",
      open: false
    },
    {
      question: "because you don't eat enough fruit each day",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et.",
      open: false
    },
    {
      question: "because you don't eat enough vegetables each day",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et.",
      open: false
    },
    {
      question: "because you don't eat enough dairy each day",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus soluta sequi esse nesciunt. Hic aliquid assumenda laboriosam repellendus, suscipit facere expedita commodi odit sunt, quia laborum id modi et.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
export default Accordion;
