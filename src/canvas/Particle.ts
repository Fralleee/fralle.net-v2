import Vector from "canvas/Vector"

class Particle {
  position: Vector
  direction: Vector
  radius: number
  targetRadius: number
  color: string

  constructor(position: Vector, direction: Vector, radius: number, color: string) {
    this.position = position
    this.direction = direction
    this.radius = 0
    this.targetRadius = radius
    this.color = color
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
  }

  update(canvas: HTMLCanvasElement) {
    const { width, height } = canvas
    const { targetRadius, position, direction } = this

    this.radius += Math.min(this.radius * 0.05 + 0.01, targetRadius - this.radius)

    if (position.x + targetRadius > width || position.x - targetRadius < 0) {
      direction.x = -direction.x
    }

    if (position.y + targetRadius > height || position.y - targetRadius < 0) {
      direction.y = -direction.y
    }

    position.x += direction.x
    position.y += direction.y
  }
}

export default Particle
