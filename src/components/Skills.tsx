import styled from "styled-components"
import media from "styles/media"
import SkillCategory from "components/skills/SkillCategory"
import SkillItem from "components/skills/SkillItem"
import { Certificates, Languages, Libraries } from "data/skills-data"

// #region styled
const Section = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 5rem 2rem;
  transition: all 400ms var(--easeInOutBack);

  max-width: ${media.large};
  background-color: var(--background-light);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${media.large}) {
    border-radius: 0;
  }
`

const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  margin-top: -1rem;

  @media only screen and (max-width: ${media.large}) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: ${media.medium}) {
    font-size: 3rem;
  }
  @media only screen and (max-width: ${media.small}) {
    font-size: 2.5rem;
  }
`
// #endregion

const Skills = ({ viewingProject }: DefaultAnimationProps) => {
  const minimized = viewingProject ? "minimized" : ""
  return (
    <Section id="skills" className={minimized}>
      <Header>Skills</Header>
      <div>
        <SkillCategory title="Languages">
          {Languages.map(({ SVG, title }) => (
            <SkillItem key={title}>
              <SVG /> {title}
            </SkillItem>
          ))}
        </SkillCategory>

        <SkillCategory title="Libraries, frameworks, APIs and platforms">
          {Libraries.map(({ SVG, title }) => (
            <SkillItem key={title}>
              <SVG /> {title}
            </SkillItem>
          ))}
        </SkillCategory>

        <SkillCategory title="Certificates">
          {Certificates.map(({ SVG, title }) => (
            <SkillItem key={title}>
              <SVG /> {title}
            </SkillItem>
          ))}
        </SkillCategory>
      </div>
    </Section>
  )
}

export default Skills
