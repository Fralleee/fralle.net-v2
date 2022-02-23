import { FC } from "react"
import styled from "styled-components"
import media from "styles/media"

const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  text-decoration: none;
  background-color: var(--cta);
  margin: 0.5rem 0;
  min-width: 280px;
  user-select: none;  
  border: 2px solid transparent;
  border-radius: 2px;
  color: white;
  transition: all 200ms ease-out;

  @media only screen and (max-width: ${media.medium}) {
    min-width: 200px;
  }
  @media only screen and (max-width: ${media.small}) {
    min-width: 0;
  }

  svg {
    margin-right: 1rem;
  }

  &:hover {
    color: var(--cta);   
    border-color: var(--cta);
    background-color: white; 
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
