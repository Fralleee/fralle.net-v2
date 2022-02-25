import styled from "styled-components"
import Button from "components/common/Button"
import media from "styles/media"
import { FaGlobe, FaGithub } from "react-icons/fa"

// #region styled
const Content = styled.section`
  display: flex;
  padding: 3rem 1rem;
  max-width: 900px;
  margin: 0 auto;
  
  @media only screen and (max-width: ${media.small}) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 1rem;
  }
`

const Description = styled.div`
  max-width: 65ch;
  padding: 1rem;
  padding-left: 3rem;
  
  @media only screen and (max-width: ${media.medium}) {
    padding-left: 1rem;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  width: 100%;
  margin-bottom: 1rem;
`
// #endregion

type ParamTypes = { project: Project }
const ProjectContent = ({ project }: ParamTypes) => {
  return (
    <Content>
      <Description>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
        <p>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </Description>
      {(project.site || project.repository) && (
        <Links>
          {project.site && <Button to={project.site} title="View site"><FaGlobe /> View site</Button>}
          {project.repository && <Button to={project.repository} title="View repository"><FaGithub /> View repository </Button>}
        </Links>
      )}
    </Content>
  )
}

export default ProjectContent
