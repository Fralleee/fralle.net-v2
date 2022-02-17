import { FC } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { browseTransition } from "utils/pageTransitions"
import media from "styles/media"
import { ReactComponent as BackgroundDelimiter } from "images/background-delimiter.svg"
import Links from "data/links"
import Link from "components/links/Link"

const Section = styled(motion.section)`
  position: relative;
`

const Component = styled.div`
  padding: 3rem 0 5rem 0;
  background-color: var(--background-dark);
`

const Wrapper = styled.div`
  max-width: ${media.xl};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`

const Top = styled(BackgroundDelimiter)`
  position: absolute;
  top: 1px;
  right: 0;
  left: 0;
  transform: translateY(-100%);
  min-width: 900px;
  fill: var(--background-dark);
`
const Bottom = styled(BackgroundDelimiter)`
  position: absolute;
  bottom: 1px;
  right: 0;
  left: 0;
  min-width: 900px;
  fill: var(--background-dark);
  transform: translateY(100%) scale(-1, -1);
`

const Header = styled.h1`
  font-size: clamp(3rem, calc(2rem + 4vw), 5rem);
  text-align: center;
  margin-bottom: 1rem;
  margin-top: -1rem;
  text-shadow: 0 3px 3px var(--shadow);
`

const Browse: FC = () => {

  return (
    <Section key="Browse" {...browseTransition} onAnimationComplete={() => window.scrollTo(0, 0)}>
      <Top />
      <Component >
        <Header>Recent work</Header>
        <Wrapper>
          {Links.map(link => (
            <Link key={link.title} title={link.title} to={link.to} titleImage={link.titleImage} backgroundImage={link.backgroundImage} foregroundImage={link.foregroundImage} />
          ))}
        </Wrapper>
      </Component>
      <Bottom />
    </Section>
  )
}

export default Browse
