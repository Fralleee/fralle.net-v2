import { useLocation } from "react-router-dom"
import styled from "styled-components"

const FooterSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  padding-top: 80px;
  background-color: var(--cta);
  z-index: -1;
  transition: opacity 200ms 400ms ease-out;

  &.hidden {
    transition: opacity 200ms ease-out;
    opacity: 0;
  }
  p {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;    
    margin: 1rem 0;
    color: var(--background-light);
  }
`

const Footer = () => {
  const location = useLocation()
  const viewingProject = location.pathname.length > 1
  return (
    <FooterSection className={viewingProject ? "hidden" : ""}>
      <p>Copyright &copy; {new Date().getFullYear()} Fralle.net All Rights Reserved</p>
    </FooterSection>
  )
}

export default Footer
