import { FC } from "react"
import styled from "styled-components"

type StyledProps = { inverted?: boolean }
const Anchor = styled.a<StyledProps>`
  position: relative;
  text-decoration: none;
  font-weight: bold;
  color: ${props => (props.inverted ? "var(--background-light)" : "var(--cta)")};
  display: inline-block;

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:active {
      color: ${props => (props.inverted ? "white" : "var(--cta-light)")};
    }
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: ${props => (props.inverted ? "var(--background-light)" : "var(--cta)")};
    transition: all 300ms cubic-bezier(0.25, 1, 0.5, 1);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      &:before {
        left: 0;
        right: auto;
        width: 100%;
        background-color: ${props => (props.inverted ? "white" : "var(--cta-light)")};
      }
    }
  }
`

type PropTypes = {
  href: string
  title?: string
  style?: object
  inverted?: boolean
}
const AnchorComponent: FC<PropTypes> = ({ children, href, title, style, inverted }) => {
  return (
    <Anchor href={href} title={title} style={style} inverted={inverted} target="_blank">
      {children}
    </Anchor>
  )
}

export default AnchorComponent
