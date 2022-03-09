import Browse from "components/links/Browse"
import { motion } from "framer-motion"
import { mainTransition } from "utils/pageTransitions"
import About from "./About"
import Intro from "./Intro"

const Main = ({ fontsLoaded }: { fontsLoaded: boolean }) => {
  return (
    <motion.section key="Main" {...mainTransition} onAnimationComplete={() => window.scrollTo(0, 0)}>
      <Intro fontsLoaded={fontsLoaded} />
      <Browse fontsLoaded={fontsLoaded} />
      <About fontsLoaded={fontsLoaded} />
    </motion.section>
  )
}

export default Main
