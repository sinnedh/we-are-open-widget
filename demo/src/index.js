import React, { Component } from "react";
import { render } from "react-dom";

import WeAreOpenWidget from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>we-are-open-widget Demo</h1>
        <WeAreOpenWidget id="zGaS2K8Xnyq5Sax7kPYa" />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
