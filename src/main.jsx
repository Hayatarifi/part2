import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
