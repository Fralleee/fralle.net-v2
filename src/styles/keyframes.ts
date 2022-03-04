import { keyframes } from "styled-components"

export const spinAnimation = keyframes`
  from { 
    opacity: 0; 
    transform: rotate(360deg); 
  }
  75% { 
    transform: rotate(-20deg); 
  }
  to { 
    opacity: 1; 
    transform: rotate(0deg); 
  }
`

export const popAnimation = keyframes`
  from { 
    opacity: 0; 
    top: 30px; 
  }
  to { 
    opacity: 1; 
    top: 0; 
  }
`

export const popUpTransform = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px);
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
  }
`

export const upAndDownLoop = keyframes`
  from {
    transform: translateY(-3px);
  }
  to {
    transform: translateY(3px);
  }
`