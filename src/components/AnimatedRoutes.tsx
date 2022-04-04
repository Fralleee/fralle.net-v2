import { Routes, Route, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Project from "components/project/Project"

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <TransitionGroup component={null} appear enter>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="route"
        onEntered={() => console.log("ENTERED")}
        onEnter={() => console.log("ENTER")}
        onEntering={() => console.log("ENTERING")}>
        <Routes location={location}>
          <Route path="/" element={null} />
          <Route path="/:projectId" element={<Project />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default AnimatedRoutes
