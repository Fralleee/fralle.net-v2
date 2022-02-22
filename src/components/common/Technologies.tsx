/* eslint-disable max-len */
import { ReactComponent as CSharpSVG } from "images/programming/csharp.svg"
import { ReactComponent as JavascriptSVG } from "images/programming/javascript.svg"
import { ReactComponent as TypescriptSVG } from "images/programming/typescript.svg"
import { ReactComponent as ReactSVG } from "images/programming/react.svg"
import { ReactComponent as UnitySVG } from "images/programming/unity.svg"
import { Link as DefaultLink } from "react-router-dom"
import styled from "styled-components"

const Link = styled(DefaultLink)`
  width: 48px;
  height: 48px;
  margin: 0.25rem;
  svg {
    width: 100%;
    height: auto;
  }
  
`

export const CSharp = () => <Link to="https://docs.microsoft.com/en-us/dotnet/csharp/"><CSharpSVG /></Link>
export const Javascript = () => <Link to="https://www.javascript.com/"><JavascriptSVG /></Link>
export const Typescript = () => <Link to="https://www.typescriptlang.org/"><TypescriptSVG /></Link>
export const React = () => <Link to="https://reactjs.org/"><ReactSVG /></Link>
export const Unity = () => <Link to="https://unity.com/"><UnitySVG /></Link>
