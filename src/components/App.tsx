import { Routes, Route } from "react-router-dom"
import Header from "components/Header"
import About from "components/About"
import Portfolio from "components/Portfolio"
import Browse from "components/Browse"
import Project from "components/Project"
import NoMatch from "components/NoMatch"
import { Link } from "react-router-dom"

const App = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", maxWidth: 500, margin: "0 auto", justifyContent: "space-around" }}>
        <Link to="/">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/portfolio/cooking">Cooking</Link>
        <Link to="/asdasd">NoMatch</Link>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="portfolio" element={<Portfolio />}>
          <Route path="" element={<Browse />} />
          <Route path=":projectId" element={<Project />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
