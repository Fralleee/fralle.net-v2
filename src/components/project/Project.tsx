import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { overlayTransition, projectTransition } from "utils/pageTransitions"
import BackButton from "components/common/BackButton"
import media from "styles/media"
import { Link } from "react-router-dom"
import { getProject } from "data/projects"
import { useParams } from "react-router"
import ProjectHeader from "./ProjectHeader"
import ProjectContent from "./ProjectContent"

// #region styled
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-top: 110px;
  pointer-events: none;

  @media only screen and (max-width: ${media.large}) {
    margin-top: 0;
  }
`
const Component = styled(motion.div)`
  position: relative;
  background: var(--background-light);
  width: 100%;
  max-width: ${media.large}; 
  box-shadow: 0 -8px 32px var(--shadow-dark);
  flex: 1;
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  pointer-events: all;   

  @media only screen and (max-width: ${media.large}) {
    border-radius: 0;
    box-shadow: none;
  }
`

const Overlay = styled(Link)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--shadow);

  @media only screen and (max-width: ${media.large}) {
    display: none;
  }
`
// #endregion

type ParamTypes = { projectId: "cooking" | "pizzeria" | "pingtap" | string }
const ProjectComponent: FC = () => {
  const { projectId } = useParams<ParamTypes>()
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const foundProject = getProject(projectId)
    setProject(foundProject)
    document.title = `${foundProject.title} - Fralle`
  }, [projectId])

  return project === null ? null : (
    <>
      <motion.div key="Overlay" {...overlayTransition}>
        <Overlay to="/" />
      </motion.div>
      <Container>
        <Component key="Project" {...projectTransition} onAnimationComplete={() => window.scrollTo(0, 0)}>
          <BackButton />
          <ProjectHeader project={project} />
          <ProjectContent project={project} />
        </Component>
      </Container>
    </>
  )
}

export default ProjectComponent
