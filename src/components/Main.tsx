import styled from "styled-components"
import About from "components/About"
import Intro from "components/Intro"
import Browse from "components/links/Browse"
import Skills from "components/Skills"

const Section = styled.section`
  transition: all 400ms var(--easeInOutBack);

  &.minimized {
    transform: scale(0.9);
    opacity: 0.5;
  }
`

const Main = ({ fontsLoaded, viewingProject }: DefaultAnimationProps) => {
  return (
    <Section className={`${viewingProject ? "minimized" : ""}`}>
      <Intro fontsLoaded={fontsLoaded} />
      <Browse fontsLoaded={fontsLoaded} />
      <About />
      <Skills />
    </Section>
  )
}

export default Main
