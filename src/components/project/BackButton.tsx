import { FC } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaTimesCircle } from "react-icons/fa"
import media from "styles/media"

// #region styled
const Button = styled(Link)`
  position: absolute;
  padding: 2rem;
  right: 0;
  top: 0;
  width: 128px;
  height: 128px;
  line-height: 64px;
  font-size: 4rem;
  color: var(--background-light);
  transition: color 200ms ease-out;
  user-select: none;
  z-index: 10;

  svg {
    transition: transform 200ms var(--easeOutBack);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: radial-gradient(circle at center, white 1.5rem, transparent 1.6rem);
      color: var(--cta);
      svg {
        transform: rotate(-90deg);
      }
    }
  }

  @media only screen and (max-width: ${media.large}) {
    color: var(--cta);
    background: radial-gradient(circle, var(--background-light) 40%, transparent);
    position: fixed;
    left: auto;
    top: auto;
    right: 0rem;
    bottom: 0rem;
  }
`
// #endregion

const BackButton: FC = () => {
  return (
    <Button to="/">
      <FaTimesCircle id="backbutton-close" />
    </Button>
  )
}

export default BackButton
