import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

function god(){
  alert("my god is koskhol")
}
<button onClick={god}>kir</button>


const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(<App />)
