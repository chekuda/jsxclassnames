import jsxclasses from './index'

describe('jsxclasses', () => {
  describe('when args is a string', () => {
    it('should return the string itself', () => {
      expect(jsxclasses('test')).toBe('test')
    })
    describe('and there is an extra space', () => {
      it('should return the string itself', () => {
        expect(jsxclasses('test ')).toBe('test')
      })
    })
  })
  describe('when args are multiple strings', () => {
    it('should return the list as one string with space as separator', () => {
      expect(jsxclasses('test', 'lorem', 'coixa', 'qiema')).toBe('test lorem coixa qiema')
    })
  })
  describe('when args is a number', () => {
    it('it should return the number as string', () => {
      expect(jsxclasses(1)).toBe('1')
    })
  })
  describe('when args are multiple numbers', () => {
    it('it should return the numbers as string with space separator', () => {
      expect(jsxclasses(1, 2, 4, 7)).toBe('1 2 4 7')
    })
  })
  describe('when args is an object', () => {
    it('it should return one string with truthy keys', () => {
      expect(jsxclasses({ test: true, lorem: 1 })).toBe('test lorem')
      expect(jsxclasses({ test: false, lorem: undefined, coixa: 0, qiema: 'qiema' })).toBe('qiema')
    })
  })
  describe('when args is an array', () => {
    it('it should return one string with truthy values', () => {
      expect(jsxclasses([1,'test', null])).toBe('1 test')
    })
  })
  describe('when args received is a mix of types', () => {
    it('should return only the truthy values', () => {
      expect(jsxclasses('lorem', 0, true, [1,'test', null])).toBe('lorem true 1 test')
      expect(jsxclasses('lorem', 0, { jose: 1 === 1, sur: null }, [1,'test', null])).toBe('lorem jose 1 test')
    })
  })
})