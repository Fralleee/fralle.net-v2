import styled from "styled-components"
import media from "styles/media"
import data from "data/projects-data"
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
  will-change: transform, opacity;
  transition: all 400ms var(--easeInOutBack);

  padding: 8rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;

  opacity: 0;
  animation: ${transparency} 400ms ease-out 800ms forwards;

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

const Projects = ({ viewingProject }: DefaultAnimationProps) => {
  const minimized = viewingProject ? "minimized" : ""
  return (
    <Section id="projects" className={minimized}>
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
              technologies={link.technologies}
            />
          ) : null
        )}
      </Container>
    </Section>
  )
}

export default Projects
