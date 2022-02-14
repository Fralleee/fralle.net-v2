import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Canvas from "components/Canvas"
import FloatingParticles from "canvas/FloatingParticles"
import LogoImage from "images/logo.svg"
import { ReactComponent as ShapeImage } from "images/shape.svg"
import media from "styles/media"

const HeaderSection = styled.section`
  position: relative;
  width: 100%;
  height: 580px;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: ghostwhite;
  transition: opacity 400ms var(--easeInOutBack), transform 400ms var(--easeInOutBack);


  &.to-background {
    opacity: 0.5;
    
    i {
        transform: translateY(24px) scale(0.8);
    }

    h1, h2 {
      transform: translateY(-80px) scale(0.8);
    }

    h2 {
      opacity: 0;
    }

    & canvas {
      transform: scale(0.9);
    }
  }

  @media only screen and (max-width: ${media.xl}) {
    height: 480px;
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

  @media only screen and (max-width: ${media.small}) {
    height: 280px;
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
  text-shadow: 0 6px 6px var(--shadow);
  transition: all 400ms var(--easeInOutBack);
  color: var(--cta) !important;
`

const Subtitle = styled.h2`
  z-index: 1;
  background: ghostwhite;
  box-shadow: 0 0 6px 6px ghostwhite;
  transition: all 400ms var(--easeInOutBack);
`

const Shape = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;  
  background: linear-gradient(-6.5deg, ghostwhite 50%, transparent 55%);
  svg {
    margin-bottom: -5px;
    min-width: 900px;
    fill: var(--background);
  }
`

const Header = () => {
  const location = useLocation()
  const viewingProject = location.pathname.length > 1

  return (
    <HeaderSection className={viewingProject ? "to-background" : ""}>
      <Canvas render={FloatingParticles} />
      <Shape><ShapeImage /></Shape>
      <Title>
        <Logo />
        Fralle
      </Title>
      <Subtitle>Software developer & sassy home cook</Subtitle>
    </HeaderSection>
  )
}

export default Header
