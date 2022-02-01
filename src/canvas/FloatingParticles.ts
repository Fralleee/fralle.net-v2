import Particle from "./Particle"
import Vector from "./Vector"

const particleAmountDensity = 0.2
const minParticleSize = 4
const maxParticleSize = 12
const particleSpeedFactor = .4
const colorArray = ["#042e27", "#364966", "#dc3d4b", "#fa4454"]

const FloatingParticles = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const ctx = canvas.getContext("2d")

  let particles: Particle[]
  let particleAmount: number
  let size: DOMRect

  function setupSize() {
    if (ctx === null) return

    size = canvas.getBoundingClientRect()
    ctx.canvas.width = size.width
    ctx.canvas.height = size.height
    particleAmount = Math.floor(particleAmountDensity * (size.width + size.height) / maxParticleSize)
  }

  function init() {
    setupSize()
    particles = []
    for (let i = 0; i < particleAmount; i++) {
      let radius = Math.random() * (maxParticleSize - minParticleSize) + minParticleSize
      let position = new Vector(Math.random() * size.width, Math.random() * size.height)
      let direction = new Vector(Math.random() * particleSpeedFactor - .2, Math.random() * particleSpeedFactor - .2)
      let color = colorArray[Math.floor(Math.random() * colorArray.length)]
      particles.push(new Particle(position, direction, radius, color))
    }
  }

  function animate() {
    requestAnimationFrame(animate)
    if (ctx === null) return

    ctx.clearRect(0, 0, size.width, size.height)

    particles.forEach(particle => {
      particle.update(canvas)
      particle.draw(ctx)

    })
  }

  init()
  animate()

  window.addEventListener("resize", function () {
    init()
  })
}

export default FloatingParticles
