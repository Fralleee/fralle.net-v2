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
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

export const popUpTransform = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5) translateY(30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

export const rotateIn = keyframes`
  from {
    opacity: 0;
    transform: rotate(12deg) translateY(50px);
  }
  70% {
    transform: rotate(0) translateY(-25px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

export const transparency = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const animateText = keyframes`
  from { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  to { opacity: 0; }
`
