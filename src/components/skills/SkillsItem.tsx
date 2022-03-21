import { FC } from "react"
import styled from "styled-components"

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
`
// #endregion

const SkillItem: FC = ({ children }) => {
  return <ListItem>{children}</ListItem>
}

export default SkillItem
