import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import WebFont from "webfontloader"
import styled from "styled-components"
import AnimatedRoutes from "components/AnimatedRoutes"
import Header from "components/Header"
import Footer from "components/Footer"
import Main from "components/Main"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const location = useLocation()
  const viewingProject = location.pathname.length > 1
  const sectionProps = { fontsLoaded, viewingProject }

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
      <Header {...sectionProps} />
      <Main {...sectionProps} />
      <AnimatedRoutes />
      <Footer {...sectionProps} />
    </Container>
  )
}

export default App
