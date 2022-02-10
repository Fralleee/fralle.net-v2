import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  justify-content: space-around;
  z-index: 10;
`

const Navigation = () => {

  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/pingtap">PingTap</Link>
      <Link to="/cooking">Cooking</Link>
      <Link to="/asdasd">NoMatch</Link>
    </Nav>
  )
}

export default Navigation
