import { useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import media from "styles/media"
import Projects from "data/projects"
import Link from "components/links/Link"
import { popAnimation } from "styles/keyframes"

// #region styled
const Section = styled(motion.section)`
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
  
  @media only screen and (max-width: ${media.large}) {
    border-radius: 0;
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  & > a {
    opacity: 0;
    animation: ${popAnimation} 300ms var(--easeOutBack) forwards;  
    animation-delay: 300ms;
    &:nth-child(1) { animation-delay: 75ms; }
    &:nth-child(2) { animation-delay: 150ms; }
    &:nth-child(3) { animation-delay: 225ms; }
  }
  
`

const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  margin-top: -1rem;
  transition: all 400ms var(--easeOutBack);
  transform: none;
  opacity: 1;
  
  &.hidden {
    transform: translateY(30px); 
    opacity: 0;
  }
  
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

const Browse = ({ fontsLoaded }: FontsLoadedProps) => {

  useEffect(() => {
    document.title = "Fralle"
  }, [])

  return (
    <Section>
      <Header className={fontsLoaded ? "" : "hidden"}>Recent work</Header>
      <Container>
        {Object.values(Projects).map(link => link.to ? (
          <Link key={link.title} title={link.title} to={link.to} titleImage={link.logo} backgroundImage={link.background} foregroundImage={link.foreground} />
        ) : null)}
      </Container>
    </Section>
  )
}

export default Browse
