import { Routes, Route, useLocation } from "react-router-dom"
import Header from "components/Header"
import Footer from "components/Footer"
import Browse from "components/links/Browse"
import Project from "components/Project"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import WebFont from "webfontloader"
import LogoImage from "images/logo.svg"
import { hoverUpAnimation } from "styles/keyframes"

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const LoadingOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background-light);
  z-index: 1;
`

const Logo = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5rem;
  height: 5rem;
  margin-top: -5rem;
  transform: translate(-50%, -50%);
  background-size: contain;
  background-image: ${() => `url(${LogoImage})`};
  background-repeat: no-repeat;
  filter: drop-shadow(0 6px 6px var(--shadow));  
  animation: ${hoverUpAnimation} 400ms var(--easeOutBack);
`

const App = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:400,700", "Kanit:700", "Montserrat:100"]
      },
      active: function () {
        setLoading(false)
      }
    })
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      {loading ? <LoadingOverlay key="load-app" exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Logo /></LoadingOverlay> : (
        <Container key="app-loaded" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
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
    </AnimatePresence>
  )
}

export default App
