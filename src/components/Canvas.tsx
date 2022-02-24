import { FC, useEffect } from "react"
import styled from "styled-components"

const CanvasComponent = styled.canvas`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 500ms var(--easeInOutBack);
`

type CanvasProps = {
  render: Function
}
const Canvas: FC<CanvasProps> = ({ render }) => {

  useEffect(() => render(), [render])

  return <CanvasComponent id="canvas"></CanvasComponent>
}

export default Canvas
