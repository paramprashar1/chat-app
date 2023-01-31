import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

//Avoid Multiple tabs
const channel = new BroadcastChannel("tab");
let isOriginal = true;

channel.postMessage("another-tab");
// note that listener is added after posting the message

channel.addEventListener("message", (msg) => {
  if (msg.data === "another-tab" && isOriginal) {
    // message received from 2nd tab
    // reply to all new tabs that the website is already open
    channel.postMessage("already-open");
  }
  if (msg.data === "already-open") {
    isOriginal = false;
    // message received from original tab
    // replace this with whatever logic you need
    alert("Please navigate to the already open tab!");
    window.open("about:blank", "_self");
    window.close();
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-o2sn54rvs8m3hggi.jp.auth0.com"
    clientId="8fHNrZlZNrGtTWcBK1ZWBQYoPZvnxGc8"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
