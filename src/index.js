import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MuiThemes from "./Utils/Common/MuiThemes";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import UserInfoContextProvider from "./Store/UserInfo/UserInfoContextProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MuiThemes>
      <BrowserRouter>
        <UserInfoContextProvider>
          <Routes />
        </UserInfoContextProvider>
      </BrowserRouter>
    </MuiThemes>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
