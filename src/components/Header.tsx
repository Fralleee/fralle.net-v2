import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Canvas from "components/Canvas"
import FloatingParticles from "canvas/FloatingParticles"
import LogoImage from "media/logo.svg"
import media from "styles/media"
import { spinAnimation } from "styles/keyframes"
import { useEffect, useState } from "react"
import { mainTransition } from "utils/pageTransitions"

const HeaderSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 300ms var(--easeInOutBack), transform 300ms var(--easeInOutBack);

  h1 { font-size: 10rem; }
  h2{ font-size: 1.75rem; }  
  &.fixed { position: fixed; }
  &.to-background {
    opacity: 0.5;    
    i { transform: translateY(24px) scale(0.85); }
    & canvas { transform: scale(0.9); }
  }
  
  @media only screen and (max-width: ${media.large}) {
    min-height: 380px;
    &.to-background {
      opacity: 0;
      transform: translateY(25px) scale(0.85);
      i { transform: none; }
      h1, h2 { transform: none; }
    }
    h1 { font-size: 7rem; }
    h2{ font-size: 1.5rem; }
  }
  @media only screen and (max-width: ${media.medium}) {
    h1 { font-size: 5rem; }
    h2{ font-size: 1.25rem; }
  }
  @media only screen and (max-width: ${media.small}) {
    h2{ font-size: 0.9rem; }
  }
`

const Logo = styled.i`
  position: absolute;
  top: -.75rem;
  left: -3vw;
  background-size: contain;
  background-image: ${() => `url(${LogoImage})`};
  background-repeat: no-repeat;
  width: calc(20px + 2vw);
  height: 100%;
  z-index: 2;
  transition: all 400ms var(--easeInOutBack);
  animation: ${spinAnimation} 600ms var(--easeOutBack) forwards;  
`

const TitleContainer = styled.div`
  width: 100%;
  max-width: ${media.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex: 1;
  background: radial-gradient(75% 60%, var(--background-light) 0%, var(--background-light) 33%, transparent 66%);
`

const Title = styled.h1`
  position: relative;
  color: var(--cta) !important;
  transition: all 300ms var(--easeOutBack) 100ms;
  transform: none;
  opacity: 1;
  
  &.project {
    transition: all 400ms var(--easeInOutBack);
    transform: translateY(-80px) scale(0.85);
  }
  &.hidden {
    transform: translateY(30px) rotate(6deg); 
    opacity: 0;
  }
`

const Subtitle = styled.h2`
  transition: all 400ms var(--easeInOutBack);
  transform: none;
  opacity: 1;
  
  &.project {
    transform: translateY(-60px) scale(0.9); 
    opacity: 0;
  }
  &.hidden {
    transform: translateY(30px); 
    opacity: 0;
  }
`

const Header = ({ fontsLoaded }: FontsLoadedProps) => {
  const location = useLocation()
  const viewingProject = location.pathname.length > 1
  const [fixed, setFixed] = useState(viewingProject)

  useEffect(() => {
    if (viewingProject)
      setTimeout(() => setFixed(true), mainTransition.transition.duration * 1000)
    else setFixed(false)
  }, [viewingProject])

  const transitionClasses = `${viewingProject ? "project" : ""} ${fontsLoaded ? "" : "hidden"}`
  return (
    <HeaderSection className={`${viewingProject ? "to-background" : ""} ${fixed ? "fixed" : ""}`}>
      <Canvas render={FloatingParticles} />
      <TitleContainer>
        <Title className={transitionClasses}>
          <Logo />
          Fralle
        </Title>
        <Subtitle className={transitionClasses}>Software developer & sassy home cook</Subtitle>
      </TitleContainer>
    </HeaderSection>
  )
}

export default Header
