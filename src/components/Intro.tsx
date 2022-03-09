import styled from "styled-components"
import { motion } from "framer-motion"
import media from "styles/media"
import { GitHub, HackerRank, LinkedIn } from "components/common/Social"

// #region styled
const Section = styled(motion.section)`
  width: 100%; 
  transition: all 400ms var(--easeOutBack);
  transform: none;
  opacity: 1; 
`

const Wrapper = styled.div`
  margin: 3rem auto;
  max-width: ${media.medium};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 5rem;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
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
    margin: 0 .5rem;
  }
`
// #endregion

const Intro = ({ fontsLoaded }: FontsLoadedProps) => {
  return (
    <Section>
      <Wrapper>
        <h1>Hey there! 👋</h1>
        <p>I am Roland Chelwing-Grzybowski, A software engineer based in Skövde, Sweden.</p>
        <p>When I'm not writing code for work, I grind away on passions projects primarily related to front-end development or game development.</p>
        <p>Have a look at some of my projects and, as usual, the code is available at my GitHub. If you want to get in touch, do so using the links below.</p>
        <SocialContainer>
          <LinkedIn />
          <GitHub />
          <HackerRank />
        </SocialContainer>
      </Wrapper>
    </Section>
  )
}

export default Intro
