import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Canvas from "components/Canvas"
import FloatingParticles from "canvas/FloatingParticles"
import LogoImage from "media/logo.svg"
import media from "styles/media"
import { spinAnimation } from "styles/keyframes"
import { useEffect, useState } from "react"
import { browseTransition } from "utils/pageTransitions"
import { GitHub, HackerRank, LinkedIn } from "./common/Social"

const HeaderSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--background-light);
  transition: opacity 300ms var(--easeInOutBack), transform 300ms var(--easeInOutBack);

  h1 {      
    font-size: 10rem;
  }

  h2{
    font-size: 1.75rem;
  }
  
  &.fixed {
    position: fixed;
  }
  &.to-background {
    opacity: 0.5;
    
    i {
      transform: translateY(24px) scale(0.85);
    }

    & canvas {
      transform: scale(0.9);
    }
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
    h2{ font-size: 0.8rem; }
  }
`

const Logo = styled.i`
  position: absolute;
  top: 1vh;
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
  background-color: var(--background-light-opacity);
  background: linear-gradient(to right, transparent 0%, var(--background-light-opacity) 20%, var(--background-light-opacity) 80%, transparent 100%);
  z-index: 1;
  height: 100%;
  flex: 1;
  padding-top: 5rem;
`

const Title = styled.h1`
  position: relative;
  color: var(--cta) !important;
  transition: all 400ms var(--easeOutBack);
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

const SocialContainer = styled.div`
  display: flex;
  margin: 0.5rem 0;
  & > a {
    margin: 0 .5rem;
  }
  
  transition: all 400ms  100ms var(--easeOutBack);
  transform: none;
  opacity: 1;
  
  &.project {
    transition: all 400ms var(--easeInOutBack);
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
      setTimeout(() => setFixed(true), browseTransition.transition.duration * 1000)
    else setFixed(false)
  }, [viewingProject])

  return (
    <HeaderSection className={`${viewingProject ? "to-background" : ""} ${fixed ? "fixed" : ""}`}>
      <Canvas render={FloatingParticles} />
      <TitleContainer>
        <Title className={`${viewingProject ? "project" : ""} ${fontsLoaded ? "" : "hidden"}`}>
          <Logo />
          Fralle
        </Title>
        <Subtitle className={`${viewingProject ? "project" : ""} ${fontsLoaded ? "" : "hidden"}`}>Software developer & sassy home cook</Subtitle>
        <SocialContainer className={`${viewingProject ? "project" : ""} ${fontsLoaded ? "" : "hidden"}`}>
          <LinkedIn />
          <GitHub />
          <HackerRank />
        </SocialContainer>
      </TitleContainer>
    </HeaderSection>
  )
}

export default Header
