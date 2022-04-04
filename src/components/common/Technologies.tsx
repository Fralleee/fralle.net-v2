import { ReactComponent as CSharpSVG } from "media/programming/csharp.svg"
import { ReactComponent as JavaScriptSVG } from "media/programming/javascript.svg"
import { ReactComponent as TypeScriptSVG } from "media/programming/typescript.svg"
import { ReactComponent as ReactSVG } from "media/programming/react.svg"
import { ReactComponent as UnitySVG } from "media/programming/unity.svg"
import styled from "styled-components"
import media from "styles/media"

// #region styled
const Link = styled.a`
  width: 42px;
  height: 42px;
  margin: 0.25rem;
  transform: translateZ(0);
  will-change: transform;
  transition: all 200ms var(--easeOutBack);

  @media only screen and (max-width: ${media.small}) {
    width: 32px;
    height: 32px;
  }

  svg {
    width: 100%;
    height: auto;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.15);
    }
  }
`
// #endregion

export const CSharp = () => (
  <Link href="https://docs.microsoft.com/en-us/dotnet/csharp/" title="C#" target="_blank" rel="noopener noreferrer">
    <CSharpSVG />
  </Link>
)
export const JavaScript = () => (
  <Link href="https://www.javascript.com/" title="Javascript" target="_blank" rel="noopener noreferrer">
    <JavaScriptSVG />
  </Link>
)
export const TypeScript = () => (
  <Link href="https://www.typescriptlang.org/" title="Typescript" target="_blank" rel="noopener noreferrer">
    <TypeScriptSVG />
  </Link>
)
export const React = () => (
  <Link href="https://reactjs.org/" title="React" target="_blank" rel="noopener noreferrer">
    <ReactSVG />
  </Link>
)
export const Unity = () => (
  <Link href="https://unity.com/" title="Unity" target="_blank" rel="noopener noreferrer">
    <UnitySVG />
  </Link>
)
