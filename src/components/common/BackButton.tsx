import { FC } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ImArrowLeft } from "react-icons/im"

const Button = styled(Link)`
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-size: 4rem;
  color: var(--color);
  transition: color 200ms ease-out;

  &:hover {
    color: var(--cta);
  }
`

const Project: FC = () => {
  return (
    <Button to="/">
      <ImArrowLeft />
    </Button>
  )
}

export default Project
