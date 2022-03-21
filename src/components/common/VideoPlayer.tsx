import styled from "styled-components"

// #region styled
const VideoContainer = styled.div`
  video {
    width: 100%;
  }
`
// #endregion

type Props = {
  video?: string
  className?: string
}
const VideoPlayer = ({ video, className }: Props) => (
  <VideoContainer className={className}>
    <video src={video} autoPlay loop muted playsInline></video>
  </VideoContainer>
)

export default VideoPlayer
