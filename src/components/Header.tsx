import styled from "styled-components"
import Canvas from "components/Canvas"
import FloatingParticles from "canvas/FloatingParticles"
import LogoImage from "media/logo.svg"
import media from "styles/media"
import { spinAnimation } from "styles/keyframes"

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 400ms var(--easeInOutBack);

  h1 { font-size: 10rem; }
  h2 { 
    font-size: 2rem; 
    strong { 
      font-family: "Arial"; 
      font-weight: normal; 
    }
  } 

  &.fixed { position: fixed; }
  &.minimized {
    transform: translateY(25px) scale(0.85);
    opacity: 0.5; 
  }
  
  @media only screen and (max-width: ${media.large}) {
    min-height: 380px;
    h1 { font-size: 8.5rem; }
    h2 { 
      font-size: 1.75rem; 
    }
  }
  @media only screen and (max-width: ${media.medium}) {
    h1 { font-size: 7rem; }
    h2 { 
      text-align: center;
      strong { 
        display: block; 
        line-height: 0.1;
        background: var(--cta);
      }
      span { display: block; }
    }
  }
  @media only screen and (max-width: ${media.small}) {
    h1 { font-size: 5.5rem; }
    h2 { font-size: 1.5rem; }
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
  transition: all 400ms var(--easeOutBack) 100ms;
  transform: none;
  opacity: 1;

  &.hidden {
    transform: translateY(30px) rotate(6deg); 
    opacity: 0;
  }
`

const Subtitle = styled.h2`
  transition: all 400ms var(--easeInOutBack);
  transform: none;
  opacity: 1;

  &.hidden {
    transform: translateY(30px); 
    opacity: 0;
  }
`

const Header = ({ fontsLoaded, viewingProject }: DefaultAnimationProps) => {
  return (
    <Section className={`${viewingProject ? "minimized" : ""}`}>
      <Canvas render={FloatingParticles} />
      <TitleContainer>
        <Title>
          <Logo />
          Fralle
        </Title>
        <Subtitle>
          Software developer <span><strong>&</strong> sassy home cook</span></Subtitle>
      </TitleContainer>
    </Section>
  )
}

export default Header
