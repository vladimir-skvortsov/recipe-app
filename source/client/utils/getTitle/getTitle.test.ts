import getTitle from './getTitle'


const getRandomString = () =>
  Math.random().toString(36).slice(2)


describe('getTitle()', () => {
  it('Returns correct value', () => {
    expect(getTitle('')).toBe('')

    for (let index = 0; index < 10; index += 1) {
      const title = getRandomString()
      expect(getTitle(title)).toBe(title)
    }
  })
})