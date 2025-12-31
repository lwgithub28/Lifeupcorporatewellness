import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useNavigate, useLocation } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const ScrollToTop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate(location.pathname, { replace: true });
    window.scrollTo(0, 0);
  }, [location.pathname, navigate]);

  return null;
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
