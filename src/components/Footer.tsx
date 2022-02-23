import styled from "styled-components"

const FooterSection = styled.section`
  position: relative;
  width: 100%;
  padding-top: 280px;
  background-color: var(--background-light);
  z-index: -1;

  p {
    text-align: center;
    opacity: 0.6;
    font-weight: bold;    
  }
`

const Footer = () => {
  return (
    <FooterSection>
      <p>Copyright &copy; {new Date().getFullYear()} Fralle.net All Rights Reserved</p>
    </FooterSection>
  )
}

export default Footer
