import { FC } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { browseTransition } from "utils/pageTransitions"
import media from "styles/media"

const Component = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -100px auto 0 auto;
  padding-top: 2rem;
  max-width: ${media.large};
  width: 100%;
`

const Item = styled(Link)`
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

const Browse: FC = () => {

  return (
    <Component key="Browse" {...browseTransition} onAnimationComplete={() => window.scrollTo(0, 0)}>
      <Item to="cooking">Cooking</Item>
      <Item to="pingtap">PingTap</Item>
      <Item to="asdasdasd">ASDASDASD</Item>
      <Item to="bajs">Bajs</Item>
      <Item to="heyyyy">Heyyyy</Item>
    </Component>
  )
}

export default Browse
