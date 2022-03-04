import { FC } from "react"
import styled from "styled-components"
import media from "styles/media"

const Button = styled.a`
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
  border-radius: 2px;
  transition: all 200ms ease-out;
  
  &:hover, &:focus {
    color: var(--cta);   
    border-color: var(--cta);
    background-color: white;
  }
  
  &:before{
    display: none !important;
  }

  @media only screen and (max-width: ${media.large}) {
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

type ButtonProps = {
  to: string
  title: string
}
const ButtonComponent: FC<ButtonProps> = ({ children, to, title }) => {
  return (
    <Button href={to} title={title} target="_blank">
      {children}
    </Button>
  )
}

export default ButtonComponent
