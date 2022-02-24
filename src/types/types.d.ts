
interface ProjectMap { [name: string]: Project }
type Project = { title: string, logo: string, background: string, technologies: ReactNode[], repository?: string, site?: string }
type FontsLoadedProps = {
  fontsLoaded: boolean
}