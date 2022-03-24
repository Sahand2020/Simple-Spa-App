import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import App1 from './App-Class';
// import App2 from './App-Func';
import Landing from './Landing';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App1/> */}
    {/* <App2/> */}
    <Landing />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
