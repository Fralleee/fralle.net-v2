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

const NonLink = styled.p`
  width: 42px;
  height: 42px;
  margin: 0.25rem;
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

type TechnologiesProps = {
  nonLink?: boolean
}
export const CSharp = ({ nonLink }: TechnologiesProps) =>
  nonLink ? (
    <NonLink>
      <CSharpSVG />
    </NonLink>
  ) : (
    <Link href="https://docs.microsoft.com/en-us/dotnet/csharp/" title="C#" target="_blank" rel="noopener noreferrer">
      <CSharpSVG />
    </Link>
  )
export const JavaScript = ({ nonLink }: TechnologiesProps) =>
  nonLink ? (
    <NonLink>
      <JavaScriptSVG />
    </NonLink>
  ) : (
    <Link href="https://www.javascript.com/" title="Javascript" target="_blank" rel="noopener noreferrer">
      <JavaScriptSVG />
    </Link>
  )
export const TypeScript = ({ nonLink }: TechnologiesProps) =>
  nonLink ? (
    <NonLink>
      <TypeScriptSVG />
    </NonLink>
  ) : (
    <Link href="https://www.typescriptlang.org/" title="Typescript" target="_blank" rel="noopener noreferrer">
      <TypeScriptSVG />
    </Link>
  )
export const React = ({ nonLink }: TechnologiesProps) =>
  nonLink ? (
    <NonLink>
      <ReactSVG />
    </NonLink>
  ) : (
    <Link href="https://reactjs.org/" title="React" target="_blank" rel="noopener noreferrer">
      <ReactSVG />
    </Link>
  )
export const Unity = ({ nonLink }: TechnologiesProps) =>
  nonLink ? (
    <NonLink>
      <UnitySVG />
    </NonLink>
  ) : (
    <Link href="https://unity.com/" title="Unity" target="_blank" rel="noopener noreferrer">
      <UnitySVG />
    </Link>
  )
