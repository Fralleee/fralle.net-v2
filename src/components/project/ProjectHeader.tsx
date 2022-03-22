import styled from "styled-components"
import media from "styles/media"
import VideoPlayer from "components/common/VideoPlayer"
import CrossfadeImage from "components/common/CrossfadeImage"
import { useEffect, useState } from "react"
import { nextIndex } from "utils/arrayHelpers"
import { popUpTransform } from "styles/keyframes"

// #region styled
const Header = styled.section`
  position: relative;
  width: 100%;
  min-height: 500px;
  border-radius: var(--radius-top);
  clip-path: polygon(100% 0%, 100% 90%, 0% 100%, 0% 0%);

  @media only screen and (max-width: ${media.large}) {
    border-radius: 0;
  }
  @media only screen and (max-width: ${media.medium}) {
    min-height: 400px;
  }
  @media only screen and (max-width: ${media.small}) {
    min-height: 300px;
  }

  @media only screen and (max-height: ${media.medium}) {
    min-height: 450px;
  }
  @media only screen and (max-height: ${media.small}) {
    min-height: 300px;
  }
`
const Background = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: var(--radius-top);

  @media only screen and (max-width: ${media.large}) {
    width: ${media.large};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0;
  }
  @media only screen and (max-width: ${media.medium}) {
    width: ${media.medium};
  }
`

const Foreground = styled(CrossfadeImage)`
  position: absolute;
  bottom: 20%;
  right: 10%;
  height: auto;
  width: 50%;
  transform: perspective(360px) rotateY(-15deg);
  filter: drop-shadow(4px 8px 8px var(--shadow-dark));
  min-width: 480px;

  @media only screen and (max-width: ${media.small}) {
    top: 20%;
    min-width: 320px;
  }
`

const Video = styled(VideoPlayer)`
  position: absolute;
  bottom: 20%;
  right: 10%;
  height: auto;
  width: 50%;
  transform: perspective(360px) rotateY(-15deg);
  filter: drop-shadow(4px 8px 8px var(--shadow-dark));

  @media only screen and (max-width: ${media.small}) {
    top: 20%;
    min-width: 320px;
  }
`

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, #00000088 30%, transparent 100%);
`

const Title = styled.img`
  position: absolute;
  bottom: -5%;
  left: 0;
  width: 100%;
  max-width: 900px;
  min-width: 420px;
  opacity: 0;
  transform: translateY(30px);
  animation: ${popUpTransform} 300ms 200ms var(--easeOutBack) forwards;

  @media only screen and (max-width: ${media.small}) {
    bottom: 0;
  }
`

const Technologies = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 5rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-light);
  border-radius: var(--radius-sm);
  opacity: 0;
  transform: translateY(30px);
  animation: ${popUpTransform} 300ms 250ms var(--easeOutBack) forwards;

  @media only screen and (max-width: ${media.large}) {
    bottom: 4rem;
  }

  @media only screen and (max-width: ${media.medium}) {
    bottom: 3rem;
  }

  @media only screen and (max-width: ${media.small}) {
    left: 1rem;
    right: auto;
    bottom: auto;
    top: 1rem;
    padding: 0.25rem;
  }
`
// #endregion

type ParamTypes = { project: Project }
const ProjectHeader = ({ project }: ParamTypes) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(nextIndex(index, project.preview || [], true))
    }, 5000)
    return () => clearInterval(interval)
  }, [index, project.preview])

  return (
    <Header>
      <Background alt="Background" src={project.background} />
      <HeaderOverlay />
      {project.preview && <Foreground alt="Preview" src={project.preview[index]} />}
      {project.video && <Video video={project.video} />}
      <Title alt="Title" src={project.logo} />
      {project.technologies.length > 0 && (
        <Technologies>
          {project.technologies.map((Tech, i) => (
            <Tech key={i} />
          ))}
        </Technologies>
      )}
    </Header>
  )
}

export default ProjectHeader
