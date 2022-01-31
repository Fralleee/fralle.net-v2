import BackgroundImage from "images/background.svg"
import LogoImage from "images/logo.svg"
import styled from "styled-components"
import media from "styles/media"

const Header = styled.section`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 90%);
  background-image: ${() => `url(${BackgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  
  @media screen and (max-width: ${media.xl}) {
    background-size: calc(900px + 35vw);
  } 
`

const Logo = styled.i`
  position: absolute;
  top: -1vh;
  left: -3vw;
  background-size: contain;
  background-image: ${() => `url(${LogoImage})`};
  background-repeat: no-repeat;
  width: calc(20px + 2vw);
  height: 100%;
  text-shadow: none;
  z-index: 2;
  
`

const Title = styled.h1`
  position: relative;
  display: flex;
  z-index: 1;
  text-shadow: 
    -12px -12px 12px var(--background), 
    12px -12px 12px var(--background), 
    -12px 12px 12px var(--background), 
    12px 12px 12px var(--background);
`

const Subtitle = styled.h2`
  z-index: 1;
  background: var(--background);
  box-shadow: 0 0 6px 6px var(--background);
`

const App = () => {
  return (
    <Header>
      <Title>
        <Logo />
        Fralle
      </Title>
      <Subtitle>Software developer & sassy home cook</Subtitle>
    </Header>
  )
}

export default App
