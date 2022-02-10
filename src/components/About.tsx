import { FC } from "react"
import styled from "styled-components"

const Component = styled.div`
  background: pink;
  min-height: 500px;
  width: 100%;  
  padding-top: 2rem;
`

const About: FC = () => {

  return (
    <Component>
      <h3>About</h3>
    </Component>
  )
}

export default About
