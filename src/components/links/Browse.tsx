import { useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { browseTransition } from "utils/pageTransitions"
import media from "styles/media"
import Projects from "data/projects"
import Link from "components/links/Link"
import { popAnimation } from "styles/keyframes"

// #region styled
const Section = styled(motion.section)`
  position: relative;
`

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  background-color: var(--background-dark);
  min-height: 500px;
`

const Wrapper = styled.div`
  max-width: ${media.xl};
  width: 100%;
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

const Top = styled.div`
  position: absolute;
  top: 1px;
  right: 0;
  left: 0;
  transform: translateY(-100%);
  min-width: 100%;
  height: 6vw;
  background: var(--background-dark);
  clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 50% 50%);
  z-index: 1000;
`
const Bottom = styled.div`
  position: absolute;
  bottom: 1px;
  right: 0;
  left: 0;
  min-width: 100%;
  transform: translateY(100%);
  height: 6vw;
  background: var(--background-dark);
  clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 50% 50%);
`

const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  margin-top: -1rem;
  text-shadow: 0 3px 3px var(--shadow);
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
    <Section key="Browse" {...browseTransition} onAnimationComplete={() => window.scrollTo(0, 0)}>
      <Top />
      <Component >
        <Header className={fontsLoaded ? "" : "hidden"}>Recent work</Header>
        <Wrapper>
          {Object.values(Projects).map(link => link.to ? (
            <Link key={link.title} title={link.title} to={link.to} titleImage={link.logo} backgroundImage={link.background} foregroundImage={link.foreground} />
          ) : null)}
        </Wrapper>
      </Component>
      <Bottom />
    </Section>
  )
}

export default Browse
