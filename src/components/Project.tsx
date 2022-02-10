import { FC } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { projectTransition } from "utils/pageTransitions"
import BackButton from "components/common/BackButton"

const Component = styled(motion.div)`
  position: relative;
  background: white;
  width: 100%;
  max-width: 1140px;  
  padding-top: 2rem;
  margin: -150px auto 0 auto;
  box-shadow: 0 -8px 32px rgba(4,8,12,.5);
  flex: 1;

  h3 {
    text-align: center;
  }
`

const Project: FC = () => {
  return (
    <Component key="Project" {...projectTransition} onAnimationComplete={() => window.scrollTo(0, 0)}>
      <BackButton />
      <h3>Project</h3>
    </Component>
  )
}

export default Project
