
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {
    id : "title"
}, "Hello World by using React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing a React element inside a render method
root.render(heading);