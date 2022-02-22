import { Routes, Route, useLocation } from "react-router-dom"
import Header from "components/Header"
import Footer from "components/Footer"
import Browse from "components/links/Browse"
import Project from "components/Project"
import styled from "styled-components"
import { AnimatePresence } from "framer-motion"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const App = () => {
  const location = useLocation()
  return (
    <Container>
      <Header />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Browse />} />
          <Route path="/:projectId" element={<Project />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Container>
  )
}

export default App
