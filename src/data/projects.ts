import NotFoundTitle from "media/projects/NotFound/title.png"
import NotFoundBg from "media/projects/NotFound/background.png"
import CWFTitle from "media/projects/CWF/title.png"
import CWFBg from "media/projects/CWF/background.png"
import CWFFg from "media/projects/CWF/foreground.png"
import CWFPreview1 from "media/projects/CWF/preview1.png"
// import CWFPreview2 from "media/projects/CWF/preview2.png"
import PizzeriaTitle from "media/projects/Pizzeria/title.png"
import PizzeriaBg from "media/projects/Pizzeria/background.png"
import PizzeriaFg from "media/projects/Pizzeria/foreground.png"
import PizzeriaPreview1 from "media/projects/Pizzeria/preview1.png"
// import PizzeriaPreview2 from "media/projects/Pizzeria/preview2.png"
import PingtapTitle from "media/projects/Pingtap/title.png"
import PingtapBg from "media/projects/Pingtap/background.png"
import PingtapFg from "media/projects/Pingtap/foreground.png"
import PingtapVideo from "media/projects/Pingtap/preview.mp4"
import { CSharp, Javascript, React, Typescript, Unity } from "components/common/Technologies"

const projects: ProjectMap = {
  cooking: {
    title: "Cooking with Fralle",
    to: "cooking",
    logo: CWFTitle,
    background: CWFBg,
    foreground: CWFFg,
    preview: CWFPreview1,
    technologies: [Typescript, React],
    repository: "https://github.com/Fralleee/cooking-with-fralle",
    site: "https://cooking.fralle.net/"
  },
  pizzeria: {
    title: "Pizzeria",
    to: "pizzeria",
    logo: PizzeriaTitle,
    background: PizzeriaBg,
    foreground: PizzeriaFg,
    preview: PizzeriaPreview1,
    technologies: [Javascript, React],
    repository: "https://github.com/Fralleee/pizzeria-frontend-challenge",
    site: "https://fralleee.github.io/pizzeria-frontend-challenge/"
  },
  pingtap: {
    title: "Pingtap",
    to: "pingtap",
    logo: PingtapTitle,
    background: PingtapBg,
    foreground: PingtapFg,
    video: PingtapVideo,
    technologies: [CSharp, Unity]
  },
  notfound: {
    title: "Not found",
    logo: NotFoundTitle,
    background: NotFoundBg,
    technologies: []
  }
}

export const getProject = (id: string | undefined): Project => {
  if (id !== undefined && ["cooking", "pizzeria", "pingtap"].includes(id)) {
    return projects[id]
  }
  return projects.notfound
}

export default projects