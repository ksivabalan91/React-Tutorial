import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// Root element is in index.html with id = root
const entryPoint = document.getElementById("root");
// createRoot set the element as a root and injects the App components and its components into its div
ReactDOM.createRoot(entryPoint).render(<App />);
