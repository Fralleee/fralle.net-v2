/* eslint-disable max-len */
import NotFoundTitle from "media/projects/NotFound/title.png"
import NotFoundBg from "media/projects/NotFound/background.png"
import CWFTitle from "media/projects/CWF/title.png"
import CWFBg from "media/projects/CWF/background.png"
import CWFFg from "media/projects/CWF/foreground.png"
import CWFPreview1 from "media/projects/CWF/preview1.png"
import CWFPreview2 from "media/projects/CWF/preview2.png"
import PizzeriaTitle from "media/projects/Pizzeria/title.png"
import PizzeriaBg from "media/projects/Pizzeria/background.png"
import PizzeriaFg from "media/projects/Pizzeria/foreground.png"
import PizzeriaPreview1 from "media/projects/Pizzeria/preview1.png"
import PizzeriaPreview2 from "media/projects/Pizzeria/preview2.png"
import PingtapTitle from "media/projects/Pingtap/title.png"
import PingtapBg from "media/projects/Pingtap/background.png"
import PingtapFg from "media/projects/Pingtap/foreground.png"
import PingtapVideo from "media/projects/Pingtap/preview.mp4"
import { CSharp, Javascript, React, Typescript, Unity } from "components/common/Technologies"
import Anchor from "components/common/Anchor"

const projects: ProjectMap = {
  cooking: {
    title: "Cooking with Fralle",
    to: "project/cooking",
    logo: CWFTitle,
    background: CWFBg,
    foreground: CWFFg,
    preview: [CWFPreview1, CWFPreview2],
    technologies: [Typescript, React],
    repository: "https://github.com/Fralleee/cooking-with-fralle",
    site: "https://cooking.fralle.net/",
    content: (
      <>
        <p>Storing my favorite recipes has always been a challenge. From using hidden Facebook groups to use browser bookmarks, nothing was quite up to the challenge.</p>
        <p>The ultimate solution was creating a self-hosted site with a short URL for easy access.</p>
        <p>Check out the repo if code interest you, otherwise make yourself a <Anchor href="https://cooking.fralle.net/#/dijon-travolta" title="To recipe">Dijon Travolta</Anchor> for that final splash every Friday deserves.</p>
      </>
    )
  },
  pizzeria: {
    title: "Pizzeria",
    to: "project/pizzeria",
    logo: PizzeriaTitle,
    background: PizzeriaBg,
    foreground: PizzeriaFg,
    preview: [PizzeriaPreview1, PizzeriaPreview2],
    technologies: [Javascript, React],
    repository: "https://github.com/Fralleee/pizzeria-frontend-challenge",
    site: "https://fralleee.github.io/pizzeria-frontend-challenge/",
    content: (
      <>
        <p>Originally, a full-stack developer coding challenge from a company I was interviewing for.</p>
        <p>Technologies used in this project were based on the stack the company used and this was made over a period of a week.</p>
      </>
    )
  },
  pingtap: {
    title: "Pingtap",
    to: "project/pingtap",
    logo: PingtapTitle,
    background: PingtapBg,
    foreground: PingtapFg,
    video: PingtapVideo,
    technologies: [CSharp, Unity],
    content: (
      <>
        <p>Games have always been my passion, so it hardly comes as a surprise that I, as a programmer, would get involved in game programming.</p>
        <p>What started as an arena game with a home-made JavaScript game engine strengthened into a multiplayer 3D FPS shooter made in <Anchor href="https://unity.com/" title="To Unity">Unity</Anchor>.</p>
        <p>Still a very early prototype and will probably never be completed, but is one of my ever evolving passion projects.</p>
      </>
    )
  },
  notfound: {
    title: "Not found",
    logo: NotFoundTitle,
    background: NotFoundBg,
    technologies: [],
    content: (
      <>
        <p>Probably copy-pasted the wrong link?</p>
      </>
    )
  }
}

export const getProject = (id: string | undefined): Project => {
  if (id !== undefined && ["cooking", "pizzeria", "pingtap"].includes(id)) {
    return projects[id]
  }
  return projects.notfound
}

export default projects