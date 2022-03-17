import styled from "styled-components"
import media from "styles/media"
import { GitHub, HackerRank, LinkedIn, StackOverflow } from "components/common/Social"
import { popAnimation } from "styles/keyframes"

// #region styled
const Section = styled.section`
  width: 100%;
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

  &.animate {
    h1,
    p {
      animation: ${popAnimation} 300ms var(--easeOutBack) forwards;
      animation-delay: 350ms;
      &:nth-child(1) {
        animation-delay: 125ms;
      }
      &:nth-child(2) {
        animation-delay: 200ms;
      }
      &:nth-child(3) {
        animation-delay: 275ms;
      }
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

  &.animate {
    & > a {
      animation: ${popAnimation} 300ms var(--easeOutBack) forwards;
      animation-delay: 550ms;
      &:nth-child(1) {
        animation-delay: 400ms;
      }
      &:nth-child(2) {
        animation-delay: 450ms;
      }
      &:nth-child(3) {
        animation-delay: 500ms;
      }
    }
  }
`
// #endregion

const Intro = ({ fontsLoaded }: DefaultAnimationProps) => {
  const animate = fontsLoaded ? "animate" : ""
  return (
    <Section>
      <Wrapper className={animate}>
        <h1>Hey there! 👋</h1>
        <p>I am Roland Chelwing-Grzybowski, A software engineer based in Skövde, Sweden.</p>
        <p>
          When I'm not writing code for work, I grind away on passions projects primarily related to front-end development or game
          development.
        </p>
        <p>
          Have a look at some of my projects and, as usual, the code is available at my GitHub. If you want to get in touch, do so using the
          links below.
        </p>
        <SocialContainer className={animate}>
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
