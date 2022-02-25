import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Canvas from "components/Canvas"
import FloatingParticles from "canvas/FloatingParticles"
import LogoImage from "media/logo.svg"
import media from "styles/media"
import { spinAnimation } from "styles/keyframes"
import { useEffect, useState } from "react"
import { browseTransition } from "utils/pageTransitions"

const HeaderSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 480px;
  padding-top: 5rem;
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
  top: -1vh;
  left: -3vw;
  background-size: contain;
  background-image: ${() => `url(${LogoImage})`};
  background-repeat: no-repeat;
  width: calc(20px + 2vw);
  height: 100%;
  filter: drop-shadow(0 6px 6px var(--shadow));
  z-index: 2;
  transition: all 400ms var(--easeInOutBack);
  animation: ${spinAnimation} 600ms var(--easeOutBack) forwards;  
`

const Title = styled.h1`
  position: relative;
  z-index: 1;
  text-shadow: 0 6px 6px var(--shadow);
  color: var(--cta) !important;
  background-color: var(--background-light-opacity);
  box-shadow: 0 0 6px 6px var(--background-light-opacity);
  user-select: none;
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
  margin-top: 1rem;
  z-index: 1;
  background-color: var(--background-light-opacity);
  box-shadow: 0 0 6px 6px var(--background-light-opacity);
  user-select: none;
  transition: all 400ms var(--easeInOutBack);
  transform: none;
  opacity: 1;
  
  &.project {
    transform: translateY(-30px) scale(0.9); 
    opacity: 0;
  }
  &.hidden {
    transform: translateY(15px); 
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
      <Title className={`${viewingProject ? "project" : ""} ${fontsLoaded ? "" : "hidden"}`}>
        <Logo />
        Fralle
      </Title>
      <Subtitle className={`${viewingProject ? "project" : ""} ${fontsLoaded ? "" : "hidden"}`}>Software developer & sassy home cook</Subtitle>
    </HeaderSection>
  )
}

export default Header
