import Vector from "./Vector"

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
    if (this.radius < this.targetRadius) this.radius += this.radius * 0.05 + 0.01

    if (this.position.x + this.targetRadius > canvas.width || this.position.x - this.targetRadius < 0) {
      this.direction.x = -this.direction.x
    }
    if (this.position.y + this.targetRadius > canvas.width || this.position.y - this.targetRadius < 0) {
      this.direction.y = -this.direction.y
    }

    this.position.x += this.direction.x
    this.position.y += this.direction.y
  }
}

export default Particle