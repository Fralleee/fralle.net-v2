
interface ProjectMap { [name: string]: Project }
type Project = {
  title: string,
  to?: string,
  logo: string,
  background: string,
  foreground?: string,
  preview?: string,
  video?: string,
  technologies: ReactNode[],
  repository?: string,
  site?: string
}
type FontsLoadedProps = {
  fontsLoaded: boolean
}