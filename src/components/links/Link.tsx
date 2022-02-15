import { FC } from "react"
import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"

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

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0 5px var(--background-light), 0 4px 8px var(--shadow);
    transition: transform 200ms var(--easeOutBack);
  }

  &:hover {
    .foreground {
      transform: scale(1) translateY(-11%);
      transition: transform 200ms var(--easeOutBack);
    }
  }
`

const BackgroundImage = styled.img`
  width: 100%;
  border-radius: 8px;
`
const ForegroundImage = styled.img`
  position: absolute;
  top: -0%;
  right: 16%;
  width: 30%;
  transform: scale(0.8);
  transition: all 300ms ease-out;
`

type LinkProps = {
  to: string
  backgroundImage: string
  foregroundImage: string
  foregroundImageStyle?: object
}
const Link: FC<LinkProps> = ({ to, backgroundImage, foregroundImage, foregroundImageStyle }) => {

  return (
    <LinkComponent to={to}>
      <BackgroundImage src={backgroundImage} />
      <ForegroundImage className="foreground" style={foregroundImageStyle} src={foregroundImage} />
    </LinkComponent>
  )
}

export default Link
