const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const myFunction = require('../src/clock')

// Write your tests below
describe('#main function', function() {
  // With no inputs, myFunction returns 0
  // myFunction() --> 0
  it('function returns 0 with no inputs', function() {
    var actual = myFunction()
    var expected = 0
    assert.equal(expected, actual)
  })
  // With a single input, myFunction returns just that input
  // myFunction(a) --> a
  // it('returns a single input', function() {
  //   var actual = myFunction('dog')
  //   var expected = 'dog'
  //   assert.equal(expected, actual)
  // })
  // With two number inputs, myFunction returns those inputs added together
  // myFunction(1,2) --> 3
  // it('returns the sum of two numbers if two numbers are input', function() {
  //   var actual = myFunction(1, 5)
  //   var expected = 6
  //   assert.equal(expected, actual)
  // })
  // With two string inputs, myFunction returns the strings concatenated
  // myFunction('Pika', 'chu') --> 'Pikachu'
  // it('returns a concatenated string when two strings are input', function() {
  //   var actual = myFunction('Holy', 'Moly')
  //   var expected = 'HolyMoly'
  //   assert.equal(expected, actual)
  // })
  // Given any number of string inputs, returns all inputs concatenated
  // myFunction('This ', 'is ', 'a ', 'string!') --> 'This is a string!'
  // myFunction('I ', 'like ', 'turtles!') --> 'I like turtles!'
  // it('returns all inputs concatenated', function() {
  //   var actual = myFunction('Holy', 'Moly', 'Yikes', 'Etc')
  //   var expected = 'HolyMolyYikesEtc'
  //   assert.equal(expected, actual)
  // })
  // Given any number of number inputs, returns all inputs summed.
  // myFunction(1,2,3,4,5,6,7,100) --> 128
  // myFunction(1,2,3) --> 6
  // it('returns all numbers concatenated', function() {
  //   var actual = myFunction(1,2,3,4,5,100)
  //   var expected = 115
  //   assert.equal(expected, actual)
  // })
})
