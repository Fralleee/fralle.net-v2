import styled from "styled-components"
import Button from "components/common/Button"
import media from "styles/media"
import { FaGlobe, FaGithub } from "react-icons/fa"
import { popUpTransform } from "styles/keyframes"

// #region styled
const Content = styled.section`
  display: flex;
  padding: 3rem 1rem;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;  
  
  @media only screen and (max-width: ${media.small}) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 1rem;
  }
`

const Description = styled.div`
  width: 100%;
  flex: 1;
  max-width: 65ch;
  padding: 0 1rem;
  padding-right: 2rem;
  
  @media only screen and (max-width: ${media.small}) {
    padding-right: 1rem;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 280px;
  margin-bottom: 1rem;

  & > a {   
    opacity: 0; 
    transform: translateY(30px);
    animation: ${popUpTransform} 300ms var(--easeOutBack) forwards;  
    &:nth-child(1) {    
      animation-delay: 350ms;
    }
    &:nth-child(2) {    
      animation-delay: 400ms;
    }
  }
`

const NoLinks = styled.div`
  border-radius: 16px;
  width: 100%;
  padding: 2rem;
  text-align: center;

  background: var(--background-dark);
`
// #endregion

type ParamTypes = { project: Project }
const ProjectContent = ({ project }: ParamTypes) => {
  return (
    <Content>
      <Description>
        {project.content}
      </Description>
      <Links>
        {project.site && <Button to={project.site} title="View site"><FaGlobe /> View site</Button>}
        {project.repository && <Button to={project.repository} title="View repository"><FaGithub /> View repository </Button>}
        {!project.site && !project.repository && <NoLinks>No external links available</NoLinks>}
      </Links>
    </Content>
  )
}

export default ProjectContent
