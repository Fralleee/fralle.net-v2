import { ImArrowDown } from "react-icons/im"
import styled from "styled-components"
import { upAndDownLoop } from "styles/keyframes"

const AnchorComponent = styled.a`
  position: relative;
  text-decoration: none;
  font-weight: bold;
  color: var(--cta);
  margin: 1rem 0;
  margin-left: 1.75rem;
  cursor: pointer;
  font-size: 1.75rem;
  font-family: "Neucha", "sans-serif";
  padding: .5rem;
  border-radius: 25%;
  background: var(--background-light);

  svg {
    position: relative;
    top: 5px;
    opacity: 0;
    animation: ${upAndDownLoop} 400ms ease-out infinite alternate forwards;
    transition: all 300ms cubic-bezier(0.25, 1, 0.5, 1);
  }
  
  &:before{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: var(--cta);
    transition: all 300ms cubic-bezier(0.25, 1, 0.5, 1);
  }
  
  @media (hover: hover) and (pointer: fine) {

    &:hover, &:active {
      color: var(--cta-light);
    }

    &:hover{
      svg {
        opacity: 1;
      }
      &:before{
        left: 0;
        right: auto;
        width: calc(100% - 1.75rem);
        background-color: var(--cta-light);
      }
    }
  }
`

const AboutLink = () => {

  const scrollTo = () => {
    document.getElementById("about")?.scrollIntoView()
  }

  return (
    <AnchorComponent onClick={scrollTo}>
      About me  <ImArrowDown />
    </AnchorComponent>
  )
}

export default AboutLink

