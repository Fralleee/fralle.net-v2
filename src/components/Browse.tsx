import { FC } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { browseTransitions } from "utils/pageTransitions"

const Component = styled(motion.div)`
  min-height: 500px;
  margin: 0 auto;
  padding-top: 2rem;
  
  h3 {
    text-align: center;
  }
`

const Browse: FC = () => {

  return (
    <Component key="Browse" {...browseTransitions} onAnimationComplete={() => window.scrollTo(0, 0)}>
      <h3>Browse</h3>
    </Component>
  )
}

export default Browse
