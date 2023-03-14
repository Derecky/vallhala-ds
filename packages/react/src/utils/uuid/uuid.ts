const generator = (c: string) => {
  const random = (Math.random() * 16) | 0
  // eslint-disable-next-line eqeqeq
  const value = c == 'x' ? random : (random & 0x3) | 0x8
  return value.toString(16)
}

export const generateUUID = () => {
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    generator,
  )
  return uuid
}
