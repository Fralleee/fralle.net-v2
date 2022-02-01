import Vector from "./Vector"

class Particle {

  position: Vector
  direction: Vector
  radius: number
  color: string

  constructor(position: Vector, direction: Vector, radius: number, color: string) {
    this.position = position
    this.direction = direction
    this.radius = radius
    this.color = color
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
  }

  update(canvas: HTMLCanvasElement) {
    if (this.position.x + this.radius > canvas.width || this.position.x - this.radius < 0) {
      this.direction.x = -this.direction.x
    }
    if (this.position.y + this.radius > canvas.width || this.position.y - this.radius < 0) {
      this.direction.y = -this.direction.y
    }

    this.position.x += this.direction.x
    this.position.y += this.direction.y
  }
}

export default Particle