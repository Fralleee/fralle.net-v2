import { FC } from "react"
import styled from "styled-components"
import media from "styles/media"

// #region styled
const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  margin: 1rem;

  svg {
    height: 32px;
    width: 32px;
    margin: 0 0.5rem;
  }

  @media only screen and (max-width: ${media.small}) {
    min-width: 150px;
  }
`
// #endregion

const SkillItem: FC = ({ children }) => {
  return <ListItem>{children}</ListItem>
}

export default SkillItem
