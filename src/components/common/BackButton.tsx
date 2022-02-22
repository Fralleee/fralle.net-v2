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
  color: var(--shadow-dark);
  transition: color 200ms ease-out;
  user-select: none;
  z-index: 10;

  svg {
    transition: transform 200ms var(--easeOutBack);
  }

  &:hover {
    color: var(--cta);
    svg {
      transform: rotate(-90deg);
      filter: drop-shadow(0 0 3px var(--shadow-dark));
    }
  }
  
  @media only screen and (max-width: ${media.large}) {
    position: fixed;
    left: auto;
    top: auto;
    right: -1rem;
    bottom: -2rem;
  }
`

const BackButton: FC = () => {
  return (
    <Button to="/">
      <ImArrowLeft />
    </Button>
  )
}

export default BackButton
