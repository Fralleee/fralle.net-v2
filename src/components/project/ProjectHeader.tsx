import styled from "styled-components"
import media from "styles/media"
import VideoPlayer from "components/common/VideoPlayer"

// #region styled
const Header = styled.section`
  position: relative;
  width: 100%;
  padding-top: 56.3925%;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  clip-path: polygon(100% 0%, 100% 90%, 0% 100%, 0% 0%);

  @media only screen and (max-width: ${media.large}) {
    border-radius: 0;
    min-height: 505px;
    padding-top: 0;
  }
  @media only screen and (max-width: ${media.medium}) {
    min-height: 400px;
  }
  @media only screen and (max-width: ${media.small}) {
    min-height: 300px;
  }
  
  @media only screen and (max-height: ${media.large}) {
    padding-top: 0;
    min-height: 505px;
  }
  
  @media only screen and (max-height: ${media.medium}) {
    min-height: 400px;
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
  
  @media only screen and (max-width: ${media.large}) {
    width: ${media.large};
    left: 50%;
    transform: translateX(-50%);
  }
  @media only screen and (max-width: ${media.medium}) {
    width: ${media.medium};
  }
`

const Foreground = styled.img`
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
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
  width: 640px;
  height: auto;
  filter: drop-shadow(4px 8px 8px var(--shadow-dark));

  @media only screen and (max-width: ${media.medium}) {  
    right: auto;
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 480px;
    height: auto;
  }  
  @media only screen and (max-width: ${media.small}) {
    width: 320px;
    height: auto;
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
  bottom: -6%;
  left: 0;
  width: 100%;  
  max-width: 900px;
  min-width: 420px;
  filter: drop-shadow(1px 1px 4px var(--shadow-dark));
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
  border-radius: 4px;
  filter: drop-shadow(0 0 4px var(--shadow-dark));
  
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
  return (
    <Header>
      <Background src={project.background} />
      <HeaderOverlay />
      {project.preview && <Foreground src={project.preview} />}
      {project.video && <Video video={project.video} />}
      <Title src={project.logo} />
      {project.technologies.length > 0 && (
        <Technologies>
          {project.technologies.map((Tech, i) => <Tech key={i} />)}
        </Technologies>
      )}
    </Header>
  )
}

export default ProjectHeader
