import { FC } from "react"
import styled from "styled-components"

const Component = styled.div`
  background: pink;
  min-height: 500px;
  width: 100%;  
  padding-top: 2rem;
`

const NoMatch: FC = () => {

  return (
    <Component>
      <h3>NoMatch</h3>
    </Component>
  )
}

export default NoMatch
