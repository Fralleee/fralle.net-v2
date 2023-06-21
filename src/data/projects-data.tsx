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
    title: "Cooking with Fralle",
    to: "cooking",
    logo: CWFTitle,
    background: CWFBg,
    foreground: CWFFg,
    preview: [CWFPreview1, CWFPreview2],
    technologies: [TypeScript, React],
    repository: "https://github.com/Fralleee/cooking-with-fralle",
    site: "https://cooking.fralle.net/",
    content: (
      <>
        <p>
          Keeping track of my preferred recipes was constantly difficult. Whether I utilized concealed Facebook groups or resorted to
          browser bookmarks, no method seemed sufficiently effective.
        </p>

        <p>The best answer to this issue was to create a self-hosted website with a brief URL for convenient accessibility.</p>

        <p>
          If coding piques your interest, feel free to explore the repository. If not, treat yourself to a{" "}
          <Anchor href="https://cooking.fralle.net/dijon-travolta" title="To recipe">
            Dijon Travolta
          </Anchor>{" "}
          , the perfect end-of-week garnish that every Friday calls for.
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
    to: "pingtap",
    logo: PingtapTitle,
    background: PingtapBg,
    foreground: PingtapFg,
    video: PingtapVideo,
    technologies: [CSharp, Unity],
    content: (
      <>
        <p>
          My fervor for games is longstanding, hence it's unsurprising that my programming journey led me into the realm of game
          development.
        </p>
        <p>
          What initially emerged as an arena game, powered by a custom-built JavaScript game engine, evolved into a multiplayer 3D FPS
          shooter developed in{" "}
          <Anchor href="https://unity.com/" title="To Unity">
            Unity
          </Anchor>
          .
        </p>
        <p>
          While still in the nascent prototype stage and perhaps never destined for completion, it remains one of my continuously evolving
          passion projects.
        </p>
      </>
    )
  },
  swiftpaste: {
    title: "SwiftPaste",
    to: "swiftpaste",
    logo: PingtapTitle,
    background: PingtapBg,
    foreground: PingtapFg,
    video: PingtapVideo,
    preview: [PizzeriaPreview1, PizzeriaPreview2],
    technologies: [TypeScript],
    repository: "https://github.com/Fralleee/SwiftPaste",
    site: "https://chrome.google.com/webstore/detail/swiftpaste/ocamjpjndljkgcoeadplclcoiepjicgj/",
    content: (
      <>
        <p>Introducing SwiftPaste, a spiffy chrome extension that turbocharges your copy-paste experience.</p>
        <p>
          With quick access to categorized clipboard data based on context, it takes form filling, coding, and communication from a
          yawn-inducing task to a walk in the park.
        </p>
      </>
    )
  },
  bunsandburgers: {
    title: "Buns and Burgers",
    to: "bunsandburgers",
    logo: PingtapTitle,
    background: PingtapBg,
    foreground: PingtapFg,
    video: PingtapVideo,
    technologies: [TypeScript, React],
    repository: "https://github.com/Fralleee/buns-and-burgers",
    site: "https://buns-and-burgers.netlify.app/",
    content: (
      <>
        <p>Welcome to Buns and Burgers, a hamburger restaurant ordering website built with Next.js, Chakra UI, and Xata.</p>
        <p>
          This project serves as a demo page and a proof of concept, showcasing the power of Next.js for server-side rendering, Chakra UI
          for beautiful and responsive UI components, and Xata as a lightweight database solution.
        </p>
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
  if (id !== undefined && Object.keys(projects).includes(id)) {
    return projects[id]
  }
  return projects.notfound
}

export default projects
