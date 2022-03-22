import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ReactGA from "react-ga4"
import AnimatedRoutes from "components/AnimatedRoutes"
import Header from "components/Header"
import Footer from "components/Footer"
import Intro from "components/Intro"
import Projects from "components/Projects"
import About from "components/About"
import Skills from "components/Skills"

const App = () => {
  const location = useLocation()
  const viewingProject = location.pathname.length > 1
  const sectionProps = { viewingProject }

  useEffect(() => ReactGA.initialize("G-3ES5YB2HGY"), [])

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname })
  }, [location])

  return (
    <>
      <Header {...sectionProps} />
      <Intro {...sectionProps} />
      <Projects {...sectionProps} />
      <About {...sectionProps} />
      <Skills {...sectionProps} />
      <AnimatedRoutes />
      <Footer {...sectionProps} />
    </>
  )
}

export default App
