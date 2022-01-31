const maxFontSize = 75
const factor = 1.7

export const getTitleFontSize = (length: number, screenWidth: number): number => {
  return Math.min(screenWidth / (length - 2) * factor, maxFontSize)
}