import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context"
import App from "./App"


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
)
