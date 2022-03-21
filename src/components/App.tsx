import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ReactGA from "react-ga4"
import WebFont from "webfontloader"
import AnimatedRoutes from "components/AnimatedRoutes"
import Header from "components/Header"
import Footer from "components/Footer"
import Intro from "components/Intro"
import Projects from "components/Projects"
import About from "components/About"
import Skills from "components/Skills"

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const location = useLocation()
  const viewingProject = location.pathname.length > 1
  const sectionProps = { fontsLoaded, viewingProject }

  useEffect(() => ReactGA.initialize("G-3ES5YB2HGY"), [])

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname })
  }, [location])

  useEffect(() => {
    if (viewingProject) {
      document.body.classList.add("fixed")
    } else {
      document.body.classList.remove("fixed")
      document.title = "Fralle"
    }
  }, [viewingProject])

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:400,700", "Kanit:400,700", "Montserrat:100"]
      },
      active: () => setFontsLoaded(true)
    })
  }, [])

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
