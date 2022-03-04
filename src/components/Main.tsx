import Browse from "components/links/Browse"
import About from "./About"

const Main = ({ fontsLoaded }: { fontsLoaded: boolean }) => {
  return (
    <>
      <Browse fontsLoaded={fontsLoaded} />
      <About fontsLoaded={fontsLoaded} />
    </>
  )
}

export default Main
