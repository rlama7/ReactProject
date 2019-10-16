import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  // best for data loading, API requests
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // callbacks
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  } // end comopnentDidMount()

  // componentDidUpdate() {
  //   console.log('My component was updated')
  // }

  // componentWillUnmount() {}

  renderContent() {
    // conditional rendering
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errormessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  } // end renderContent()

  // render() --> react requirement for class based component
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  } // end render()
}

ReactDOM.render(<App />, document.querySelector("#root"));
