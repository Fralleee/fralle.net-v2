import { keyframes } from "styled-components"

export const spinAnimation = keyframes`
  from { opacity: 0; transform: rotate(360deg); }
  75% { transform: rotate(-20deg); }
  to { opacity: 1; transform: rotate(0deg); }
`

export const popAnimation = keyframes`
  from { opacity: 0; top: 30px }
  to { opacity: 1; top: 0 }
`