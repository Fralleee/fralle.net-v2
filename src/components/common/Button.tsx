import { FC } from "react"
import styled from "styled-components"
import media from "styles/media"

const ButtonComponent = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  text-decoration: none;
  margin: 0.5rem auto;
  min-width: 280px;
  user-select: none;  
  background-color: var(--cta);
  border: 2px solid transparent;
  color: white;   
  border-radius: var(--radius-md);
  transition: all 200ms ease-out;
  
  @media (hover: hover) and (pointer: fine) {
    &:hover, &:focus {
      color: var(--cta);   
      border-color: var(--cta);
      background-color: white;
    }
  }
  
  &:before{
    display: none !important;
  }

  @media only screen and (max-width: ${media.large}) and (hover: hover) and (pointer: fine) {
    &:hover, &:focus {
      color: var(--cta);   
      background-color: white;
      border-color: var(--cta);
      box-shadow: none;
    }
  }  
  @media only screen and (max-width: ${media.medium}) {
    min-width: 200px;
  }
  @media only screen and (max-width: ${media.small}) {
    min-width: 0;
  }

  svg {
    margin-right: 1rem;
  }

`

type PropTypes = {
  to: string
  title: string
  style?: object
  download?: string
}
const Button: FC<PropTypes> = ({ children, to, title, style, download }) => {
  return (
    <ButtonComponent href={to} title={title} style={style} download={download} target="_blank">
      {children}
    </ButtonComponent>
  )
}

export default Button
