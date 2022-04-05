/* eslint-disable max-len */
import NotFoundTitle from "media/projects/NotFound/title.webp"
import NotFoundBg from "media/projects/NotFound/background.webp"
import CWFTitle from "media/projects/CWF/title.webp"
import CWFBg from "media/projects/CWF/background.webp"
import CWFFg from "media/projects/CWF/foreground.webp"
import CWFPreview1 from "media/projects/CWF/preview1.webp"
import CWFPreview2 from "media/projects/CWF/preview2.webp"
import PizzeriaTitle from "media/projects/Pizzeria/title.webp"
import PizzeriaBg from "media/projects/Pizzeria/background.webp"
import PizzeriaFg from "media/projects/Pizzeria/foreground.webp"
import PizzeriaPreview1 from "media/projects/Pizzeria/preview1.webp"
import PizzeriaPreview2 from "media/projects/Pizzeria/preview2.webp"
import PingtapTitle from "media/projects/Pingtap/title.webp"
import PingtapBg from "media/projects/Pingtap/background.webp"
import PingtapFg from "media/projects/Pingtap/foreground.webp"
import PingtapVideo from "media/projects/Pingtap/preview.mp4"
import { CSharp, JavaScript, React, TypeScript, Unity } from "components/common/Technologies"
import Anchor from "components/common/Anchor"

const projects: ProjectMap = {
  cooking: {
    title: "Cooking",
    to: "cooking",
    logo: CWFTitle,
    background: CWFBg,
    foreground: CWFFg,
    preview: [CWFPreview1, CWFPreview2],
    technologies: [TypeScript, React],
    repository: "https://github.com/developer",
    site: "https://site.com/",
    content: (
      <>
        <p>
          Storing my favorite recipes has always been a challenge. From using hidden Facebook groups to use browser bookmarks, nothing was
          quite up to the challenge.
        </p>
        <p>The ultimate solution was creating a self-hosted site with a short URL for easy access.</p>
        <p>
          Check out the repo if code interest you, otherwise make yourself a{" "}
          <Anchor href="https://site.com/" title="To recipe">
            Dijon Travolta
          </Anchor>{" "}
          for that final splash every Friday deserves.
        </p>
      </>
    )
  },
  pizzeria: {
    title: "Pizzeria",
    to: "pizzeria",
    logo: PizzeriaTitle,
    background: PizzeriaBg,
    foreground: PizzeriaFg,
    preview: [PizzeriaPreview1, PizzeriaPreview2],
    technologies: [JavaScript, React],
    repository: "https://github.com/developer",
    site: "https://site.com/",
    content: (
      <>
        <p>Originally, a full-stack developer coding challenge from a company I was interviewing for.</p>
        <p>Technologies used in this project were based on the stack the company used and this was made over a period of a week.</p>
      </>
    )
  },
  pingtap: {
    title: "Pingtap",
    to: "pingtap",
    logo: PingtapTitle,
    background: PingtapBg,
    foreground: PingtapFg,
    video: PingtapVideo,
    technologies: [CSharp, Unity],
    content: (
      <>
        <p>
          Games have always been my passion, so it hardly comes as a surprise that I, as a programmer, would get involved in game
          programming.
        </p>
        <p>
          What started as an arena game with a home-made JavaScript game engine strengthened into a multiplayer 3D FPS shooter made in{" "}
          <Anchor href="https://unity.com/" title="To Unity">
            Unity
          </Anchor>
          .
        </p>
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
