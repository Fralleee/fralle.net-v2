import { FC } from "react"
import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"
import media from "styles/media"

const LinkComponent = styled(RouterLink)`
  position: relative;
  max-width: 350px;
  width: 100%;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  z-index: 1;
  border-radius: var(--radius-md);
  box-shadow: 0 0 0 5px var(--background-light);
  transition: transform 300ms var(--easeOutBack);

  &:before {
    display: none !important;
  }

  @media only screen and (min-width: ${media.medium}) and (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.05);
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
  border-radius: var(--radius-md);
`
const ForegroundImage = styled.img`
  position: absolute;
  width: 100%;
  transition: all 300ms var(--easeOutBack);
  filter: drop-shadow(2px 4px 6px var(--shadow));
`

type LinkProps = {
  title: string
  to: string
  backgroundImage: string
  titleImage: string
  foregroundImage?: string
  foregroundImageStyle?: object
}
const Link: FC<LinkProps> = ({ title, to, backgroundImage, titleImage, foregroundImage, foregroundImageStyle }) => {
  return (
    <LinkComponent to={to} title={title}>
      <BackgroundImage src={backgroundImage} />
      <ForegroundImage className="foreground" style={foregroundImageStyle} src={foregroundImage} />
      <ForegroundImage className="title" style={foregroundImageStyle} src={titleImage} />
    </LinkComponent>
  )
}

export default Link
