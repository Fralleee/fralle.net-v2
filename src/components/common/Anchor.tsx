import { FC } from "react"
import styled from "styled-components"

const Anchor = styled.a`
  position: relative;
  text-decoration: none;
  font-weight: bold;
  color: var(--cta);
  display: inline-block;

  @media (hover: hover) and (pointer: fine) {
    &:hover, &:active {
      color: var(--cta-light);
    }
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
    &:hover{
      &:before{
        left: 0;
        right: auto;
        width: 100%;
        background-color: var(--cta-light);
      }
    }
  }
`

type PropTypes = {
  href: string
  title?: string
  style?: object
}
const AnchorComponent: FC<PropTypes> = ({ children, href, title, style }) => {
  return (
    <Anchor href={href} title={title} style={style} target="_blank">
      {children}
    </Anchor>
  )
}

export default AnchorComponent
