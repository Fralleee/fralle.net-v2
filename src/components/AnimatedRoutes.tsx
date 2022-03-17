import { Routes, Route, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Project from "components/project/Project"
import { useEffect } from "react"
import ReactGA from "react-ga"

const AnimatedRoutes = () => {
  const location = useLocation()

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [location])

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={400} classNames="route">
        <Routes location={location}>
          <Route path="/" element={<section />} />
          <Route path="/:projectId" element={<Project />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default AnimatedRoutes
