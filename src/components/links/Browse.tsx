import { FC } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { browseTransition } from "utils/pageTransitions"
import media from "styles/media"
import { ReactComponent as ShapeImage } from "images/shape.svg"
import CookingWithFralle from "images/links/cooking-with-fralle.png"
import CookingWithFralleTitle from "images/links/cooking-with-fralle_title.png"
import CookingWithFralleForeground from "images/links/cooking-with-fralle_foreground.png"
import Link from "components/links/Link"

const Section = styled(motion.section)`
  position: relative;
`

const Component = styled.div`
  padding: 5rem 0;
  background-color: var(--background-dark);
`

const Wrapper = styled.div`
  max-width: ${media.large};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`

const Top = styled(ShapeImage)`
  position: absolute;
  top: 1px;
  right: 0;
  left: 0;
  transform: translateY(-100%);
  min-width: 900px;
  fill: var(--background-dark);
`
const Bottom = styled(ShapeImage)`
  position: absolute;
  bottom: 1px;
  right: 0;
  left: 0;
  min-width: 900px;
  fill: var(--background-dark);
  transform: translateY(100%) scale(-1, -1);
`

const Browse: FC = () => {

  return (
    <Section key="Browse" {...browseTransition} onAnimationComplete={() => window.scrollTo(0, 0)}>
      <Top />
      <Component >
        <Wrapper>
          <Link to="cooking" backgroundImage={CookingWithFralle} titleImage={CookingWithFralleTitle} foregroundImage={CookingWithFralleForeground} />
        </Wrapper>
      </Component>
      <Bottom />
    </Section>
  )
}

export default Browse
