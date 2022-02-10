import { FC } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { projectTransition } from "utils/pageTransitions"

const Component = styled(motion.div)`
  position: relative;
  background: white;
  width: 1140px;  
  padding-top: 2rem;
  margin: -150px auto 0 auto;
  flex: 1;

  h3 {
    text-align: center;
  }
`

const Project: FC = () => {
  return (
    <Component key="Project" {...projectTransition} onAnimationComplete={() => window.scrollTo(0, 0)}>
      <h3>Project</h3>
    </Component>
  )
}

export default Project
