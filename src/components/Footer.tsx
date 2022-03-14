import styled from "styled-components"

const FooterSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  padding-top: 80px;
  background-color: var(--background-light);
  z-index: -1;
  transition: opacity 200ms 400ms ease-out;

  p {
    text-align: center;
    opacity: 0.6;
    font-size: 1rem;
    font-weight: bold;    
    margin: 1rem 0;
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
