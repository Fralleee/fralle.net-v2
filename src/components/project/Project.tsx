import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import BackButton from "components/common/BackButton"
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
    .container {
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
    .container {
      opacity: 1;
      transform: none;
    }
  }
  &.route-exit .container {
    transition: all 400ms var(--easeOutBack);
  }
`

const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  pointer-events: none;

  @media only screen and (max-width: ${media.large}) {
    margin-top: 0;
  }
`
const Component = styled.div`
  margin-top: 110px;
  position: relative;
  background: var(--background-light);
  width: 100%;
  max-width: ${media.large};
  flex: 1;
  border-radius: var(--radius-top);
  display: flex;
  flex-direction: column;
  z-index: 1;
  pointer-events: all;
  transition: all 300ms var(--easeOutBack) 150ms;

  @media only screen and (max-width: ${media.large}) {
    margin-top: 0;
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
  transition: all 300ms ease-out;

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

  return project === null ? (
    <Section />
  ) : (
    <Section>
      <Overlay to="/" className="overlay" />
      <Container>
        <Component className="container">
          <BackButton />
          <ProjectHeader project={project} />
          <ProjectContent project={project} />
        </Component>
      </Container>
    </Section>
  )
}

export default ProjectComponent
