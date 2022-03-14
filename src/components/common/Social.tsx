/* eslint-disable max-len */
import { FaLinkedin, FaGithub, FaHackerrank, FaStackOverflow } from "react-icons/fa"
import styled from "styled-components"
import media from "styles/media"

const Link = styled.a`
  width: 64px;
  height: 64px;
  margin: 0.25rem;
  transition: all 200ms var(--easeOutBack);
  color: #c9cbd5;
  
  @media only screen and (max-width: ${media.small}) {
    width: 48px;
    height: 48px;
  }

  svg {
    width: 100%;
    height: auto;
  }  

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.15);
      &.linkedin { color: #2867B2; }
      &.github { color: #333; }
      &.hackerrank { color: #2DB95C; }
      &.stackoverflow { color: #F48225; }
    }
  }
`

export const LinkedIn = () => <Link className="linkedin" href="https://www.linkedin.com/in/fralle/" title="LinkedIn" target="_blank"><FaLinkedin /></Link>
export const GitHub = () => <Link className="github" href="https://github.com/Fralleee/" title="GitHub" target="_blank"><FaGithub /></Link>
export const HackerRank = () => <Link className="hackerrank" href="https://www.hackerrank.com/Fralle/" title="HackerRank" target="_blank"><FaHackerrank /></Link>
export const StackOverflow = () => <Link className="stackoverflow" href="https://stackoverflow.com/users/3155183/fralle/" title="StaockOverflow" target="_blank"><FaStackOverflow /></Link>
