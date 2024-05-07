import React from "react"
import ReactDOM from "react-dom/client"

// ReactDOM.render(<h1>Hello, World</h1>, document.getElementById("root"));

const navbar = (
  <nav>
    <h1>KDMV</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(navbar)
