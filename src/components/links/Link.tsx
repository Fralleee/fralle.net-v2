import { FC } from "react"
import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"
import media from "styles/media"

const LinkComponent = styled(RouterLink)`
  position: relative;
  font-family: Kanit, sans-serif;
  text-decoration: none;
  max-width: 450px;
  width: 100%;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  transition: transform 300ms ease-out;
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0 0 0 5px var(--background-light);


  @media only screen and (min-width: ${media.medium}) {
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 0 5px var(--background-light), 0 4px 8px var(--shadow);
      transition: transform 200ms var(--easeOutBack);
    }

    &:hover {
      .title {
        transform: scale(1.1); 
        transition: transform 200ms var(--easeOutBack);
      }
      .foreground {
        transform: scale(1.2);
        transition: transform 200ms 50ms var(--easeOutBack);
      }
    }
  }
`

const BackgroundImage = styled.img`
  width: 100%;
  border-radius: 8px;
`
const ForegroundImage = styled.img`
  position: absolute;
  width: 100%;  
  transition: all 300ms ease-out;
`

type LinkProps = {
  to: string
  backgroundImage: string
  titleImage: string
  foregroundImage: string
  foregroundImageStyle?: object
}
const Link: FC<LinkProps> = ({ to, backgroundImage, titleImage, foregroundImage, foregroundImageStyle }) => {

  return (
    <LinkComponent to={to}>
      <BackgroundImage src={backgroundImage} />
      <ForegroundImage className="foreground" style={foregroundImageStyle} src={foregroundImage} />
      <ForegroundImage className="title" style={foregroundImageStyle} src={titleImage} />
    </LinkComponent>
  )
}

export default Link