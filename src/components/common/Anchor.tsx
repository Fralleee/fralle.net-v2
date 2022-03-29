import { FC } from "react"
import styled from "styled-components"

// #region styled
type StyledProps = { inverted?: boolean }
const Anchor = styled.a<StyledProps>`
  text-decoration: none;
  line-height: 1.6;
  font-weight: bold;
  color: ${props => (props.inverted ? "var(--background-light)" : "var(--cta)")};
  display: inline-block;

  svg {
    position: relative;
    top: 2px;
  }

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
// #endregion

type PropTypes = {
  href: string
  title?: string
  style?: object
  inverted?: boolean
  internal?: boolean
}
const AnchorComponent: FC<PropTypes> = ({ children, href, title, style, internal, inverted }) => {
  return (
    <Anchor
      href={href}
      title={title}
      style={style}
      inverted={inverted}
      target={internal ? "" : "_blank"}
      rel={internal ? "" : "noopener noreferrer"}>
      {children}
    </Anchor>
  )
}

export default AnchorComponent
