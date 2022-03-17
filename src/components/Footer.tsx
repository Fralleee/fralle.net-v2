import { FaEnvelope, FaGithub, FaHackerrank, FaLinkedin, FaStackOverflow } from "react-icons/fa"
import styled from "styled-components"
import Anchor from "components/common/Anchor"
import media from "styles/media"
import { useEffect, useState } from "react"
import { nextIndex } from "utils/arrayHelpers"
import { animateText } from "styles/keyframes"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 1rem 0;
  background-color: var(--cta);
  color: var(--background-light);
  box-shadow: 1rem 1rem var(--background-dark);
  transition: all 400ms var(--easeInOutBack);

  &.minimized {
    transform: scale(0.9);
    opacity: 0.5;
  }

  p {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 2rem;
  }
`

const Top = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: ${media.medium};
  flex-wrap: wrap;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 220px;

  @media only screen and (max-width: ${media.medium}) {
    display: none;
  }
`

const Right = styled.div`
  min-width: 200px;
  & > a {
    padding: 0.25rem;
    float: left;
    clear: left;
  }
  @media only screen and (max-width: ${media.medium}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Blockquote = styled.blockquote`
  position: relative;
  display: inline-block;
  font-size: 1.5rem;
  padding-left: 3rem;
  animation: ${animateText} 10000ms forwards;

  figcaption {
    font-style: italic;
  }

  &:before {
    position: absolute;
    content: "”";
    color: rgba(255, 255, 255, 1);
    font-size: 10rem;
    left: -1rem;
    top: -80px;
  }
`

const quotes = [
  { author: "Bill Gates", quote: "Probably the wisest man I've ever met." },
  {
    author: "Elon Musk",
    quote: "I always strive for perfection, excellence and supremacy. Roland is an obvious example of someone who has achieved all of this."
  },
  {
    author: "Ophrah Winfrey",
    quote: "I never had the pleasure of having him as a guest, but he's touched my heart in more ways than one."
  },
  {
    author: "Steve Wozniak",
    quote: "If I one day in the near future, achieve only half of what Roland has done for the world. I will die a happy man."
  },
  { author: "Robert C. Martin", quote: "You want to see something SOLID? Check out this mans GitHub repository. My god!" },
  { author: "Ryan Reynolds", quote: "I may not be perfect, but Roland is." },
  { author: "Barack Obama", quote: "My man." }
]

const Footer = ({ fontsLoaded, viewingProject }: DefaultAnimationProps) => {
  const [index, setIndex] = useState(Math.floor(Math.random() * (quotes.length - 1 - 0 + 1) + 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(nextIndex(index, quotes, true))
    }, 10000)
    return () => clearInterval(interval)
  })

  return (
    <Section className={`${viewingProject ? "minimized" : ""}`}>
      <Top>
        <Left>
          <Blockquote key={index}>
            {quotes[index].quote}
            <figcaption>- {quotes[index].author}</figcaption>
          </Blockquote>
        </Left>
        <Right>
          <Anchor href="https://www.linkedin.com/in/fralle/" inverted>
            <FaLinkedin /> LinkedIn
          </Anchor>
          <Anchor href="https://github.com/Fralleee/" inverted>
            <FaGithub /> GitHub
          </Anchor>
          <Anchor href="https://www.hackerrank.com/Fralle/" inverted>
            <FaHackerrank /> HackerRank
          </Anchor>
          <Anchor href="https://stackoverflow.com/users/3155183/fralle/" inverted>
            <FaStackOverflow /> StackOverflow
          </Anchor>
          <Anchor href="mailto: roland@fralle.net" inverted>
            <FaEnvelope /> Contact
          </Anchor>
        </Right>
      </Top>
      <p>Copyright &copy; {new Date().getFullYear()} Fralle.net All Rights Reserved</p>
    </Section>
  )
}

export default Footer
