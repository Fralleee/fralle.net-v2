import { keyframes } from "styled-components"

export const titleAnimation = keyframes`
  from { opacity: 0; transform: translateY(100px) rotate(6deg); }
  to { opacity: 1; transform: translateY(0) rotate(0deg); }
`

export const spinAnimation = keyframes`
  from { opacity: 0; transform: rotate(360deg); }
  75% { transform: rotate(-20deg); }
  to { opacity: 1; transform: rotate(0deg); }
`

export const hoverUpAnimation = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`
