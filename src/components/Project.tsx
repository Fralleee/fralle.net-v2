import { FC, useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { overlayTransition, projectTransition } from "utils/pageTransitions"
import BackButton from "components/common/BackButton"
import Button from "components/common/Button"
import media from "styles/media"
import { Link } from "react-router-dom"
import { getProject } from "data/projects"
import { useParams } from "react-router"
import { FaGlobe, FaGithub } from "react-icons/fa"

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

const Header = styled.section`
  position: relative;
  width: 100%;
  padding-top: 56.3925%;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  clip-path: polygon(100% 0%, 100% 90%, 0% 100%, 0% 0%);

  @media only screen and (max-width: ${media.large}) {
    border-radius: 0;
    min-height: 505px;
    padding-top: 0;
  }
  @media only screen and (max-width: ${media.medium}) {
    min-height: 400px;
  }
  @media only screen and (max-width: ${media.small}) {
    min-height: 300px;
  }
  
  @media only screen and (max-height: ${media.large}) {
    padding-top: 0;
    min-height: 505px;
  }
  
  @media only screen and (max-height: ${media.medium}) {
    min-height: 400px;
  }
  @media only screen and (max-height: ${media.small}) {
    min-height: 300px;
  }
`
const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  
  @media only screen and (max-width: ${media.large}) {
    width: ${media.large};
    left: 50%;
    transform: translateX(-50%);
  }
  @media only screen and (max-width: ${media.medium}) {
    width: ${media.medium};
  }
`

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, #00000088 30%, transparent 100%);
`

const Title = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;  
  max-width: 900px;
  min-width: 420px;
`

const Content = styled.section`
  display: flex;
  padding: 3rem 1rem;
  max-width: 900px;
  margin: 0 auto;
  
  @media only screen and (max-width: ${media.small}) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 1rem;
  }
`

const Description = styled.div`
  max-width: 65ch;
  padding: 1rem;
  padding-left: 3rem;
  
  @media only screen and (max-width: ${media.medium}) {
    padding-left: 1rem;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  width: 100%;
  margin-bottom: 1rem;
`

const Technologies = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 5rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,.25);
  border-radius: 4px;
  
  @media only screen and (max-width: ${media.small}) {
    bottom: auto;
    top: 1rem;
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
          <Header>
            <HeaderImage src={project.background} />
            <HeaderOverlay />
            <Title src={project.logo} />
            {project.technologies.length > 0 && (
              <Technologies>
                {project.technologies.map((Tech, i) => <Tech key={i} />)}
              </Technologies>
            )}
          </Header>
          <Content>
            <Description>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
              <p>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </Description>
            {(project.site || project.repository) && (
              <Links>
                {project.site && <Button to={project.site} title="View site"><FaGlobe /> View site</Button>}
                {project.repository && <Button to={project.repository} title="View repository"><FaGithub /> View repository </Button>}
              </Links>
            )}
          </Content>

        </Component>
      </Container>
    </>
  )
}

export default ProjectComponent
