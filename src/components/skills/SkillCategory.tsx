import { FC } from "react"
import styled from "styled-components"
import media from "styles/media"

// #region styled
const Container = styled.div`
  margin: 2rem auto;
  max-width: ${media.large};
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
  font-size: 1.5rem;
  padding-left: 1rem;
  font-weight: 400;
  border-bottom: 2px solid;
`

const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`
// #endregion

type Props = {
  title: string
}
const SkillCategory: FC<Props> = ({ children, title }) => {
  return (
    <Container>
      <Header>{title}</Header>
      <Content>{children}</Content>
    </Container>
  )
}

export default SkillCategory
