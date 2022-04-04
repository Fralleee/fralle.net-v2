import styled from "styled-components"
import media from "styles/media"
import { GitHub, HackerRank, LinkedIn, StackOverflow } from "components/common/Social"
import { popAnimation } from "styles/keyframes"
import Anchor from "components/common/Anchor"
import { FaArrowDown } from "react-icons/fa"

// #region styled
const Section = styled.section`
  width: 100%;
  transition: all 400ms var(--easeInOutBack);
`

const Wrapper = styled.div`
  margin: 3rem auto;
  max-width: ${media.medium};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 5rem;

  h1 {
    position: relative;
    opacity: 0;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    position: relative;
    opacity: 0;
  }

  h1,
  p {
    animation: ${popAnimation} 300ms var(--easeOutBack) forwards;
    &:nth-child(1) {
      animation-delay: 150ms;
    }
    &:nth-child(2) {
      animation-delay: 250ms;
    }
    &:nth-child(3) {
      animation-delay: 350ms;
    }
    &:nth-child(4) {
      animation-delay: 450ms;
    }
  }

  @media only screen and (max-width: ${media.small}) {
    padding: 0 1rem;
  }
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  & > a {
    margin: 0 0.5rem;
    opacity: 0;
  }

  & > a {
    animation: ${popAnimation} 300ms var(--easeOutBack) forwards;
    &:nth-child(1) {
      animation-delay: 550ms;
    }
    &:nth-child(2) {
      animation-delay: 650ms;
    }
    &:nth-child(3) {
      animation-delay: 750ms;
    }
    &:nth-child(4) {
      animation-delay: 850ms;
    }
  }
`
// #endregion

const Intro = ({ viewingProject }: DefaultAnimationProps) => {
  const minimized = viewingProject ? "minimized" : ""
  return (
    <Section id="intro" className={minimized}>
      <Wrapper>
        <h1>Hey there! 👋</h1>
        <p>
          I am <strong>Roland Chelwing-Grzybowski</strong>, A software engineer based in <strong>Skövde, Sweden</strong>.
        </p>
        <p>
          When I'm not writing code for work, I grind away on passions projects primarily related to front-end development or game
          development.
        </p>
        <p>
          Any questions? Send me an email <Anchor href="mailto: roland@fralle.net">roland@fralle.net</Anchor> or learn more{" "}
          <Anchor internal href="#about">
            {" "}
            about me <FaArrowDown />
          </Anchor>
        </p>
        <SocialContainer>
          <LinkedIn />
          <GitHub />
          <HackerRank />
          <StackOverflow />
        </SocialContainer>
      </Wrapper>
    </Section>
  )
}

export default Intro
