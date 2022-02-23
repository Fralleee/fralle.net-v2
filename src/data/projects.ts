import NotFoundTitle from "images/links/NotFound/title.png"
import NotFoundBg from "images/links/NotFound/background.png"
import CWFTitle from "images/links/CWF/title.png"
import CWFBg from "images/links/CWF/background.png"
import PizzeriaTitle from "images/links/Pizzeria/title.png"
import PizzeriaBg from "images/links/Pizzeria/background.png"
import PingtapTitle from "images/links/Pingtap/title.png"
import PingtapBg from "images/links/Pingtap/background.png"
import { CSharp, Javascript, React, Typescript, Unity } from "components/common/Technologies"

const projects: ProjectMap = {
  cooking: {
    title: "Cooking with Fralle",
    logo: CWFTitle,
    background: CWFBg,
    technologies: [Typescript, React],
    repository: "https://github.com/Fralleee/cooking-with-fralle",
    site: "https://cooking.fralle.net/"
  },
  pizzeria: {
    title: "Pizzeria",
    logo: PizzeriaTitle,
    background: PizzeriaBg,
    technologies: [Javascript, React],
    repository: "https://github.com/Fralleee/pizzeria-frontend-challenge",
    site: "https://fralleee.github.io/pizzeria-frontend-challenge/"
  },
  pingtap: {
    title: "Pingtap",
    logo: PingtapTitle,
    background: PingtapBg,
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

