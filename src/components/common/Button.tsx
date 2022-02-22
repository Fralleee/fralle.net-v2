import { FC } from "react"
import styled from "styled-components"

const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  background-color: var(--cta);
  margin: 0.5rem 0;
  min-width: 200px;
  user-select: none;
  
  border: 2px solid transparent;
  border-radius: 2px;
  color: white;

  transition: all 200ms ease-out;

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
