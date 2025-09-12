import React from "react";
import ReactDOM from "react-dom";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pineapple Pizza 1",
      description: "Best Pizza on earth",
    }),
    React.createElement(Pizza, {
      name: "Pineapple Pizza 2",
      description: "Best Pizza on earth",
    }),
    React.createElement(Pizza, {
      name: "Pineapple Pizza 3",
      description: "Best Pizza on earth",
    }),
    React.createElement(Pizza, {
      name: "Pineapple Pizza 4",
      description: "Best Pizza on earth",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
