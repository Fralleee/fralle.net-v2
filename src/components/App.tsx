import { Routes, Route, useLocation } from "react-router-dom"
import Navigation from "components/Navigation"
import Header from "components/Header"
// import About from "components/About"
// import Portfolio from "components/Portfolio"
import Browse from "components/Browse"
import Project from "components/Project"
// import NoMatch from "components/NoMatch"
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
      <Navigation />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Browse />} />
          <Route path="/:projectId" element={<Project />} />
        </Routes>
      </AnimatePresence>
    </Container>
  )
}

export default App
