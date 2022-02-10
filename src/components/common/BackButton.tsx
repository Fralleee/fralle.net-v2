import { FC } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ImArrowLeft } from "react-icons/im"
import media from "styles/media"

const Button = styled(Link)`
  position: absolute;
  padding: 2rem;
  left: 0;
  top: 0;
  font-size: 4rem;
  color: var(--color);
  transition: color 200ms ease-out;
  user-select: none;

  svg {
    transition: transform 200ms var(--easeInOutBack);
  }

  &:hover {
    color: var(--cta);
    svg {
      transform: rotate(-90deg);
    }
  }
  
  @media only screen and (max-width: ${media.large}) {
    position: fixed;
    left: auto;
    top: auto;
    right: 0;
    bottom: 0;
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
