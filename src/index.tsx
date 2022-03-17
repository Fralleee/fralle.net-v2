import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import ReactGA from "react-ga"
import App from "components/App"
import "styles/style.scss"
import "react-medium-image-zoom/dist/styles.css"

ReactGA.initialize("G-3ES5YB2HGY")

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)
