import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Canvas from "components/Canvas"
import FloatingParticles from "canvas/FloatingParticles"
import LogoImage from "images/logo.svg"
import media from "styles/media"

const HeaderSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 580px;
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
  
  &.to-background {
    opacity: 0.5;
    
    i {
      transform: translateY(24px) scale(0.85);
    }

    h1, h2 {
      transform: translateY(-80px) scale(0.85);
    }


    h2 {
      opacity: 0;
    }

    & canvas {
      transform: scale(0.9);
    }
  }
  
  @media only screen and (max-width: ${media.xl}) {
    min-height: 480px;
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
  
`

const Title = styled.h1`
  position: relative;
  z-index: 1;
  text-shadow: 0 6px 6px var(--shadow);
  transition: all 400ms var(--easeInOutBack);
  color: var(--cta) !important;
  background-color: var(--background-light-opacity);
  box-shadow: 0 0 6px 6px var(--background-light-opacity);
  user-select: none;
`

const Subtitle = styled.h2`
  margin-top: 1rem;
  z-index: 1;
  transition: all 400ms var(--easeInOutBack);
  background-color: var(--background-light-opacity);
  box-shadow: 0 0 6px 6px var(--background-light-opacity);
  user-select: none;
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
      {/* <ProfileImage src={JesusImage} /> */}
    </HeaderSection>
  )
}

export default Header
