import { generateUUID } from './uuid'

const regex =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gm

describe('uuid', () => {
  test('should return a valid uuid', () => {
    const uuid = generateUUID()
    expect(regex.test(uuid)).toBe(true)
  })
})
