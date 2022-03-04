import { Routes, Route, useLocation } from "react-router-dom"
import Header from "components/Header"
import Footer from "components/Footer"
import Browse from "components/links/Browse"
import Project from "components/project/Project"
import styled from "styled-components"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import WebFont from "webfontloader"
import DeveloperMessage from "utils/message"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const App = () => {
  const location = useLocation()
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    DeveloperMessage()
    WebFont.load({
      google: {
        families: ["Roboto:400,700", "Kanit:700", "Montserrat:100"]
      },
      active: () => setFontsLoaded(true)
    })
  }, [])

  return (
    <Container>
      <Header fontsLoaded={fontsLoaded} />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Browse fontsLoaded={fontsLoaded} />} />
          <Route path="/:projectId" element={<Project />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Container>
  )
}

export default App
