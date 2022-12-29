import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import Clock from "./chapter_04/Clock"

import Library from "./chapter_03/Library"

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);

// setInterval(() => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <Clock />
//         </React.StrictMode>,
//         document.getElementById("root"),
//     );
// }, 1000);

