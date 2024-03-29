import Particle from "canvas/Particle"
import Vector from "canvas/Vector"

const particleAmountDensity = 0.25
const particleSpawnRate = 50
const minParticleSize = 4
const maxParticleSize = 12
const particleSpeedFactor = 0.4
const colorArray = ["#042e27", "#364966", "#cc3d4b", "#ea4454"]
const resizeDebounceTime = 250

const FloatingParticles = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const ctx = canvas.getContext("2d")

  let particles: Particle[]
  let particleCount: number
  let particleAmount: number
  let size: DOMRect
  let startTime = Date.now()
  let timebetweenSpawn: number
  let resizeTimeout: any

  function setupSize() {
    if (ctx === null) return

    size = canvas.getBoundingClientRect()
    ctx.canvas.width = size.width
    ctx.canvas.height = size.height
    particleAmount = Math.floor((particleAmountDensity * (size.width + size.height)) / maxParticleSize)
  }

  function getRandomScreenPosition(maxSize: number) {
    return Math.random() * (maxSize - 2 * maxParticleSize) + maxParticleSize
  }

  function init() {
    setupSize()
    particleCount = 0
    particles = []
    timebetweenSpawn = particleSpawnRate
  }

  function createParticle() {
    let radius = Math.random() * (maxParticleSize - minParticleSize) + minParticleSize
    let position = new Vector(getRandomScreenPosition(size.width), getRandomScreenPosition(size.height))
    let direction = new Vector(Math.random() * particleSpeedFactor - 0.2, Math.random() * particleSpeedFactor - 0.2)
    let color = colorArray[Math.floor(Math.random() * colorArray.length)]
    particles.push(new Particle(position, direction, radius, color))
    particleCount++
  }

  function animate() {
    requestAnimationFrame(animate)
    if (ctx === null) return

    ctx.clearRect(0, 0, size.width, size.height)

    if (particleCount < particleAmount) {
      const current = Date.now()
      timebetweenSpawn += current - startTime
      startTime = current

      if (timebetweenSpawn > particleSpawnRate) {
        createParticle()
        timebetweenSpawn -= particleSpawnRate
      }
    }

    particles.forEach(particle => {
      particle.update(canvas)
      particle.draw(ctx)
    })
  }

  init()
  animate()

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(function () {
      if (canvas.getBoundingClientRect().width !== size.width) init()
    }, resizeDebounceTime)
  })
}

export default FloatingParticles
