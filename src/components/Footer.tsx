import styled from "styled-components"
import { ReactComponent as ShapeImage } from "images/shape.svg"

const FooterSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 280px;
  background-color: ghostwhite;
  z-index: -1;
`

const Shape = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  svg {
    min-width: 900px;
    fill: var(--background);
    transform: scale(-1, -1);
  }
`

const Footer = () => {
  return (
    <FooterSection>
      <Shape><ShapeImage /></Shape>
    </FooterSection>
  )
}

export default Footer
