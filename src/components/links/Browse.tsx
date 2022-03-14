import { useEffect } from "react"
import styled from "styled-components"
import media from "styles/media"
import Projects from "data/projects"
import Link from "components/links/Link"
import { transparency } from "styles/keyframes"

// #region styled
const Section = styled.section`
  position: relative;
  max-width: ${media.large};
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: var(--radius-xl);
  padding: 5rem 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background-dark);
  min-height: 600px;

  opacity: 0;
  &.animate {
      animation: ${transparency} 800ms var(--easeOutBack) 600ms forwards;  
  }
  
  @media only screen and (max-width: ${media.large}) {
    border-radius: 0;
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

const Browse = ({ fontsLoaded }: DefaultAnimationProps) => {
  const animate = fontsLoaded ? "animate" : ""

  useEffect(() => {
    document.title = "Fralle"
  }, [])

  return (
    <Section className={animate}>
      <Header>Recent work</Header>
      <Container>
        {Object.values(Projects).map(link => link.to ? (
          <Link key={link.title} title={link.title} to={link.to} titleImage={link.logo} backgroundImage={link.background} foregroundImage={link.foreground} />
        ) : null)}
      </Container>
    </Section>
  )
}

export default Browse
