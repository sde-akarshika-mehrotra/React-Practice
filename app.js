import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React </span>;

const Title = () => (
  <h1>
    {elem} 
    Learning React
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="haeding"> React from Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
