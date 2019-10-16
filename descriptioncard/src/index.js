import React from "react";
import ReactDOM from "react-dom";

import DescriptionCard from "./DescriptionCard";

class App extends React.Component {
  render() {
    return (
      <div>
        <DescriptionCard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
