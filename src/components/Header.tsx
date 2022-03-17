import styled from "styled-components"
import Canvas from "components/Canvas"
import FloatingParticles from "canvas/FloatingParticles"
import LogoImage from "media/logo.svg"
import media from "styles/media"
import { rotateIn, scaleIn, spinAnimation } from "styles/keyframes"

// #region styled
const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 400ms var(--easeInOutBack);

  h1 {
    font-size: 10rem;
  }
  h2 {
    font-size: 2rem;
    strong {
      font-family: "Arial";
      font-weight: normal;
    }
  }

  &.minimized {
    transform: translateY(25px) scale(0.85);
    opacity: 0.5;
  }

  @media only screen and (max-width: ${media.large}) {
    min-height: 380px;
    h1 {
      font-size: 8.5rem;
    }
    h2 {
      font-size: 1.75rem;
    }
  }
  @media only screen and (max-width: ${media.medium}) {
    h1 {
      font-size: 7rem;
    }
    h2 {
      text-align: center;
      strong {
        display: block;
        line-height: 0.1;
        background: var(--cta);
      }
      span {
        display: block;
      }
    }
  }
  @media only screen and (max-width: ${media.small}) {
    h1 {
      font-size: 5.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
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

const Logo = styled.i`
  position: absolute;
  top: -0.75rem;
  left: -3vw;
  background-size: contain;
  background-image: ${() => `url(${LogoImage})`};
  background-repeat: no-repeat;
  width: calc(20px + 2vw);
  height: 100%;
  z-index: 2;
  opacity: 0;
  &.animate {
    animation: ${spinAnimation} 600ms var(--easeOutBack) forwards;
  }
`

const Title = styled.h1`
  position: relative;
  color: var(--cta) !important;
  opacity: 0;
  &.animate {
    animation: ${rotateIn} 600ms var(--easeOutBack) forwards;
  }
`

const Subtitle = styled.h2`
  opacity: 0;
  &.animate {
    animation: ${scaleIn} 300ms var(--easeOutBack) 500ms forwards;
  }
`
// #endregion

const Header = ({ fontsLoaded, viewingProject }: DefaultAnimationProps) => {
  const animate = fontsLoaded ? "animate" : ""
  return (
    <Section className={viewingProject ? "minimized" : ""}>
      <Canvas render={FloatingParticles} />
      <TitleContainer>
        <Title className={animate}>
          <Logo className={animate} />
          Fralle
        </Title>
        <Subtitle className={animate}>
          Software developer{" "}
          <span>
            <strong>&</strong> sassy home cook
          </span>
        </Subtitle>
      </TitleContainer>
    </Section>
  )
}

export default Header
