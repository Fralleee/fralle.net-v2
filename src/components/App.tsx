import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import WebFont from "webfontloader"
import ReactGA from "react-ga4"
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
  const sectionProps = { viewingProject }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:400,700", "Kanit:700", "Montserrat:100"]
      },
      fontactive: () => {
        console.log("FONT ACTIVE")
        document.getElementById("loader")?.classList.add("loaded")
      },
      active: () => {
        console.log("ACTEIVE")
        setFontsLoaded(true)
      }
    })
  }, [])

  useEffect(() => ReactGA.initialize("G-3ES5YB2HGY"), [])

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname })
  }, [location])

  return fontsLoaded ? (
    <>
      <Header {...sectionProps} />
      <Intro {...sectionProps} />
      <Projects {...sectionProps} />
      <About {...sectionProps} />
      <Skills {...sectionProps} />
      <AnimatedRoutes />
      <Footer {...sectionProps} />
    </>
  ) : null
}

export default App
