export const nextIndex = (index: number, array: any[], loop: boolean = true): number => {
  return loop ? (index + 1) % array.length : Math.min(index + 1, array.length - 1)
}
