import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import BackButton from "components/project/BackButton"
import media from "styles/media"
import { Link } from "react-router-dom"
import { getProject } from "data/projects-data"
import { useParams } from "react-router"
import ProjectHeader from "components/project/ProjectHeader"
import ProjectContent from "components/project/ProjectContent"

// #region styled
const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  z-index: 100;

  &.route-exit {
    overflow: hidden;
  }
  &.route-enter,
  &.route-exit.route-exit-active {
    .overlay {
      opacity: 0;
    }
    .component {
      opacity: 0;
      transform: translateY(50px);
      z-index: 1;
    }
  }
  &.route-enter.route-enter-active,
  &.route-exit {
    .overlay {
      opacity: 1;
    }
    .component {
      opacity: 1;
      transform: none;
    }
  }
  &.route-exit .component {
    transition: all 400ms var(--easeOutBack);
  }
`

const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
`

const Component = styled.div`
  position: relative;
  top: 40px;
  background-color: var(--background-light);
  width: 100%;
  max-width: ${media.large};
  flex: 1;
  border-radius: var(--radius-top);
  display: flex;
  flex-direction: column;
  z-index: 1;
  pointer-events: all;

  transition: all 350ms var(--easeOutBack) 150ms;

  @media only screen and (max-width: ${media.large}) {
    top: 0;
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
  overflow: hidden;

  transition: opacity 500ms ease-out;

  @media only screen and (max-width: ${media.large}) {
    display: none;
  }
`
// #endregion

type ParamTypes = { projectId: "cooking" | "pizzeria" | "pingtap" | string }
const ProjectComponent: FC = () => {
  const { projectId } = useParams<ParamTypes>()
  const [project] = useState<Project>(getProject(projectId))

  useEffect(() => {
    document.title = `${project.title} - Fralle`
    document.body.classList.add("fixed")

    return () => {
      document.title = "Fralle"
      document.body.classList.remove("fixed")
    }
  })

  return (
    <Section>
      <Overlay to="/" className="overlay" />
      <Container>
        <Component className="component">
          <BackButton />
          <ProjectHeader project={project} />
          <ProjectContent project={project} />
        </Component>
      </Container>
    </Section>
  )
}

export default ProjectComponent
