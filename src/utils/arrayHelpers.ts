export const nextIndex = (index: number, array: any[], loop: boolean = true) => {
  let nextIndex = index + 1
  if (nextIndex > array.length - 1) {
    nextIndex = loop ? 0 : index
  }
  return nextIndex
}