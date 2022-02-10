export const browseTransitions = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.2 }
}

export const projectTransition = {
  initial: { opacity: 0, translateY: 100 },
  animate: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: 100 },
  transition: { duration: 0.2 }
}