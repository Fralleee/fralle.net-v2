import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Canvas from "components/Canvas"
import FloatingParticles from "canvas/FloatingParticles"
import LogoImage from "images/logo.svg"
import media from "styles/media"

const HeaderSection = styled.section`
  position: relative;
  width: 100%;
  height: clamp(380px, calc(300px + 15vw), 500px);
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 90%);
  transition: opacity 400ms var(--easeInOutBack), transform 400ms var(--easeInOutBack);


  &.to-background {
    opacity: 0.5;
    
    i {
        transform: translateY(24px) scale(0.8);
    }

    h1, h2 {
      transform: translateY(-106px) scale(0.8);
    }

    h2 {
      opacity: 0;
    }

    & canvas {
      transform: scale(0.9);
    }
  }
  
  @media only screen and (max-width: ${media.large}) {
    height: 380px;
    &.to-background {
      opacity: 0;
      transform: translateY(50px) scale(0.6);
      i, h1, h2 {
        transform: translateY(0) scale(1);
      }
    }
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
  text-shadow: none;
  z-index: 2;
  transition: all 400ms var(--easeInOutBack);
  
`

const Title = styled.h1`
  position: relative;
  z-index: 1;
  text-shadow: 
    -12px -12px 12px var(--background), 
    12px -12px 12px var(--background), 
    -12px 12px 12px var(--background), 
    12px 12px 12px var(--background);
  transition: all 400ms var(--easeInOutBack);
`

const Subtitle = styled.h2`
  z-index: 1;
  background: var(--background);
  box-shadow: 0 0 6px 6px var(--background);
  transition: all 400ms var(--easeInOutBack);
`

const Header = () => {
  const location = useLocation()
  const viewingProject = location.pathname.length > 1

  return (
    <HeaderSection className={viewingProject ? "to-background" : ""}>
      <Canvas render={FloatingParticles} />
      <Title>
        <Logo />
        Fralle
      </Title>
      <Subtitle>Software developer & sassy home cook</Subtitle>
    </HeaderSection>
  )
}

export default Header
