/* eslint-disable max-len */
import { FaLinkedin, FaGithub, FaHackerrank, FaStackOverflow } from "react-icons/fa"
import styled from "styled-components"
import media from "styles/media"

// #region styled
const Link = styled.a`
  width: 48px;
  height: 48px;
  margin: 0.25rem;
  will-change: color;
  transition: all 200ms ease-out;
  color: #c9cbd5;

  @media only screen and (max-width: ${media.small}) {
    width: 32px;
    height: 32px;
  }

  svg {
    width: 100%;
    height: auto;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      &.linkedin {
        color: #2867b2;
      }
      &.github {
        color: #333;
      }
      &.hackerrank {
        color: #2db95c;
      }
      &.stackoverflow {
        color: #f48225;
      }
    }
  }
`
// #endregion

export const LinkedIn = () => (
  <Link className="linkedin" href="https://www.linkedin.com/in/fralle/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </Link>
)
export const GitHub = () => (
  <Link className="github" href="https://github.com/Fralleee/" title="GitHub" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </Link>
)
export const HackerRank = () => (
  <Link className="hackerrank" href="https://www.hackerrank.com/Fralle/" title="HackerRank" target="_blank" rel="noopener noreferrer">
    <FaHackerrank />
  </Link>
)
export const StackOverflow = () => (
  <Link
    className="stackoverflow"
    href="https://stackoverflow.com/users/3155183/fralle/"
    title="StaockOverflow"
    target="_blank"
    rel="noopener noreferrer">
    <FaStackOverflow />
  </Link>
)
