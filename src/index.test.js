var expect = require('chai').expect
var starWars = require('./index')

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(starWars.all).to.satisfy(isArrayOfStrings)

      function isArrayOfStrings(array) {
        return array.every(item => typeof item === 'string')
      }
    })

    it('should contain `luke skywalker`', () => {
      expect(starWars.all).to.include('Luke Skywalker')
    })
  })

  describe('random', () => {
    it('should return a random item from the starwars.all', () => {
      var randomItem = starWars.random()
      expect(starWars.all).to.include(randomItem)
    })
  })
})
