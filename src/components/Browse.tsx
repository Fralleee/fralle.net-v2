import { FC } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { browseTransition } from "utils/pageTransitions"
import media from "styles/media"
import { ReactComponent as ShapeImage } from "images/shape.svg"

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

const Item = styled(Link)`
  font-family: Kanit, sans-serif;
  text-decoration: none;
  max-width: 280px;
  height: 360px;
  width: 100%;
  background: white;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  transition: all 150ms ease-out;
  z-index: 1;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow) 0px 6px 12px -2px, var(--shadow) 0px 3px 7px -3px;
  }
`

const Top = styled(ShapeImage)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  transform: translateY(-100%);
  min-width: 900px;
  fill: var(--background-dark);
`
const Bottom = styled(ShapeImage)`
  position: absolute;
  bottom: 0;
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
          <Item to="cooking">Cooking</Item>
          <Item to="pingtap">PingTap</Item>
          <Item to="asdasdasd">ASDASDASD</Item>
          <Item to="bajs">Bajs</Item>
          <Item to="heyyyy">Heyyyy</Item>
        </Wrapper>
      </Component>
      <Bottom />
    </Section>
  )
}

export default Browse
