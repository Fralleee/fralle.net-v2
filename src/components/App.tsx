
import BackgroundImage from "images/background.svg"
import styled from "styled-components"

const Header = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 90%);
  background-image: ${() => `url(${BackgroundImage})`};
  background-size: calc(900px + 35vw);
`

const Title = styled.h1`
  z-index: 1;
  text-shadow: 
    -6px -6px 6px var(--background), 
    6px -6px 6px var(--background), 
    -6px 6px 6px var(--background), 
    6px 6px 6px var(--background);
`

const Subtitle = styled.h2`
  z-index: 1;
  background: var(--background);
  box-shadow: 0 0 6px 6px var(--background);
`

const App = () => {
  return (
    <Header>
      <Title>Fralle</Title>
      <Subtitle>Software developer & sassy home cook</Subtitle>
    </Header>
  )
}

export default App
