import { Routes, Route, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Project from "components/project/Project"

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} timeout={400} classNames="route">
        <Routes location={location}>
          <Route path="/" element={null} />
          <Route path="/:projectId" element={<Project />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default AnimatedRoutes
