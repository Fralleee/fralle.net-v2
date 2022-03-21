import { useEffect } from "react"
import styled from "styled-components"
import media from "styles/media"
import data from "data/projects"
import ProjectLink from "components/project/ProjectLink"
import { transparency } from "styles/keyframes"

// #region styled
const Section = styled.section`
  position: relative;
  max-width: ${media.large};
  width: 100%;
  margin: 40px auto;
  border-radius: 82% 18% 66% 34% / 18% 66% 34% 82%;
  background-color: var(--cta);
  box-shadow: 1rem 1rem var(--background-dark);

  padding: 8rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;

  opacity: 0;
  &.animate {
    animation: ${transparency} 800ms var(--easeOutBack) 600ms forwards;
  }

  @media only screen and (max-width: ${media.large}) {
    border-radius: 0;
    box-shadow: none;
    padding: 4rem 0;
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  margin-top: -1rem;
  color: var(--background-light);

  @media only screen and (max-width: ${media.large}) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: ${media.medium}) {
    font-size: 3rem;
  }
  @media only screen and (max-width: ${media.small}) {
    font-size: 2.5rem;
  }
`
// #endregion

const Projects = ({ fontsLoaded, viewingProject }: DefaultAnimationProps) => {
  const animate = fontsLoaded ? "animate" : ""
  const minimized = viewingProject ? "minimized" : ""

  useEffect(() => {
    document.title = "Fralle"
  }, [])

  return (
    <Section id="projects" className={`${minimized} ${animate}`}>
      <Header>Recent work</Header>
      <Container>
        {Object.values(data).map(link =>
          link.to ? (
            <ProjectLink
              key={link.title}
              title={link.title}
              to={link.to}
              titleImage={link.logo}
              backgroundImage={link.background}
              foregroundImage={link.foreground}
            />
          ) : null
        )}
      </Container>
    </Section>
  )
}

export default Projects
