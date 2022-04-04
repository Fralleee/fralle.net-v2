interface ProjectMap {
  [name: string]: Project
}

type Project = {
  title: string
  to?: string
  logo: string
  background: string
  foreground?: string
  preview?: string[]
  video?: string
  technologies: ReactNode[]
  repository?: string
  site?: string
  content: JSX.Element
}
type ProjectLinkProps = {
  title: string
  to: string
  backgroundImage: string
  titleImage: string
  foregroundImage?: string
  foregroundImageStyle?: object
  technologies: ReactNode[]
}

type DefaultAnimationProps = {
  viewingProject?: boolean
}

type ImageTypes = {
  src: string
  duration?: number
  timingFunction?: string
  delay?: number
  style?: Object
  containerClass?: string
}

declare type CrossfadeImageType = (props: ImageTypes) => JSX.Element

declare module "*.mp4" {
  const src: string
  export default src
}

declare module "*.pdf" {
  const src: string
  export default src
}
