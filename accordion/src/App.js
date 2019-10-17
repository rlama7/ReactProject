import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import FAQ from "./FAQ";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";

function App() {
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
    <div>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
          
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
          </Switch>
        </div>
      </Router>

      <div className="App">
        <Header />
        <div className="faqs">
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
