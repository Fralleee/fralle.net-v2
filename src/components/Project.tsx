import { FC } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { overlayTransition, projectTransition } from "utils/pageTransitions"
import BackButton from "components/common/BackButton"
import media from "styles/media"
import { Link } from "react-router-dom"

const Component = styled(motion.div)`
  position: relative;
  background: ghostwhite;
  width: 100%;
  max-width: ${media.large}; 
  padding-top: 2rem;
  margin: -360px auto 0 auto;
  box-shadow: 0 -8px 32px var(--shadow);
  flex: 1;
  border-radius: 8px 8px 0 0;

  h3 {
    margin-top: 2rem;
    text-align: center;
  }

  @media only screen and (max-width: ${media.medium}) {
    margin: -380px auto 0 auto;
    border-radius: 0;
  }
`

const Overlay = styled(Link)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--shadow);
`

const Project: FC = () => {
  return (
    <>
      <motion.div key="Overlay" {...overlayTransition}>
        <Overlay to="/" />
      </motion.div>
      <Component key="Project" {...projectTransition} onAnimationComplete={() => window.scrollTo(0, 0)}>
        <BackButton />
        <h3>Project</h3>
      </Component>
    </>
  )
}

export default Project
