import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
// import sinon from "sinon";
import Component from "src/";

const fetch = () => {
  console.log("XXXXXXX");
};

describe("Component", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
    // sinon.restore();
  });

  it("displays loading message", () => {
    // render(<Component />, node, () => {
    //   console.log(node.innerHTML);
    //   expect(node.innerHTML).toContain(
    //     "<div>Öffnungszeiten werden geladen</div>"
    //   );
    // });
  });
});
