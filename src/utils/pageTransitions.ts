export const browseTransition = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.3, ease: [0.175, 0.885, 0.320, 1.275] }
}

export const overlayTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
}

export const projectTransition = {
  initial: { opacity: 0, translateY: 100 },
  animate: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: 100 },
  transition: { duration: 0.4, ease: [0.680, -0.550, 0.265, 1.550] }
}