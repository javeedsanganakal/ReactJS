
import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () =>(
    <div>
        <h1>Food Villa</h1>
        <h2>Hotel</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//Passing a React element inside a render method
root.render(<HeaderComponent/>);