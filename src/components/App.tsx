import Header from "components/Header"
import Footer from "components/Footer"
import Main from "components/Main"
import styled from "styled-components"
import { useEffect, useState } from "react"
import WebFont from "webfontloader"
import AnimatedRoutes from "./AnimatedRoutes"
import { useLocation } from "react-router-dom"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const location = useLocation()
  const viewingProject = location.pathname.includes("/project/")

  useEffect(() => {
    if (viewingProject) {
      document.body.classList.add("fixed")
    }
    else {
      document.body.classList.remove("fixed")
      document.title = "Fralle"
    }
  }, [viewingProject])

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:400,700", "Kanit:700", "Montserrat:100"]
      },
      active: () => setFontsLoaded(true)
    })
  }, [])

  return (
    <Container>
      <Header fontsLoaded={fontsLoaded} viewingProject={viewingProject} />
      <Main fontsLoaded={fontsLoaded} viewingProject={viewingProject} />
      <AnimatedRoutes />
      <Footer />
    </Container>
  )
}

export default App
