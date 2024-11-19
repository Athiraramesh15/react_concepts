import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hellosssssssssss"),
    React.createElement("h1", {}, "I am Athiraaa"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello"),
    React.createElement("h1", {}, "I am Athiraaa"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
