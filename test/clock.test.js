const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const should = require('chai').should()
const { Clock } = require('../src/clock')

// ====================================
//  Clock class exists and can create a new clock instance
describe('Clock class', function () {
  it('is a constructor function', function () {
    const newClock = new Clock()
    newClock.should.be.instanceof(Clock)
  })

  // ====================================
  //  Clock class has required properties
  describe('Clock properties', function () {
    var clock
    beforeEach(function () {
      var hours = 11
      var minutes = 12
      var seconds = 13

      clock = new Clock()
      console.log('clock is', clock)
    })
    it('has an hours property with a default of 0', function () {
      var err = 'clock.hours must be a number\n'
      assert.isNumber(clock.hours, err)

      err = 'clock.hours should be able to be set in the constructor\n'
      assert.equal(clock.hours, 0, err)

      var otherClock = new Clock()
      err = 'clock.hours should be 0 by default\n'
      assert.isNumber(otherClock.hours, err)
      assert.equal(otherClock.hours, 0, err)
    })
    it('has a minutes property with a default of 0', function () {
      var err = 'clock.minutes must be a number\n'
      assert.isNumber(clock.minutes, err)

      err = 'clock.minutes should be able to be set in the constructor\n'
      assert.equal(clock.minutes, 0, err)

      var otherClock = new Clock()
      err = 'clock.minutes should be 0 by default\n'
      assert.isNumber(otherClock.minutes, err)
      assert.equal(otherClock.minutes, 0, err)
    })
    it('has a seconds property with a default of 0', function () {
      var err = 'clock.seconds must be a number\n'
      assert.isNumber(clock.seconds, err)

      err = 'clock.seconds should be able to be set in the constructor\n'
      assert.equal(clock.seconds, 0, err)

      var otherClock = new Clock()
      err = 'clock.seconds should be 0 by default\n'
      assert.isNumber(otherClock.seconds, err)
      assert.equal(otherClock.seconds, 0, err)
    })
    it('has a isTwentyFour property with a default of true', function () {
      var err = 'clock.isTwentyFour must be a boolean\n'
      var bool1 = typeof clock.isTwentyFour
      assert.equal(bool1, 'boolean', err)

      err = 'clock.isTwentyFour should be able to be set in the constructor\n'
      assert.equal(clock.isTwentyFour, true, err)

      var otherClock = new Clock()
      err = 'clock.isTwentyFour should be true by default\n'
      var bool2 = typeof otherClock.isTwentyFour
      assert.equal(bool2, 'boolean', err)
      assert.equal(otherClock.isTwentyFour, true, err)
    })
  })

  // ====================================
  // getTime function
  describe('#getTime', function() {
    // with valid 12-hour inputs, constructor returns the correct time
    it('function returns correct time with valid 2-digit 12-hour format input', function() {
      var testTime = {hours: 11, minutes: 12, seconds: 13}
      var clock = new Clock(testTime)

      var actual = clock.getTime()
      var expected = '11:12:13 AM'
      assert.equal(expected, actual)
    })
    // with valid 2-digit 24-hour format input, constructor returns the correct time
    it('function returns correct time with valid 2-digit 24-hour format input', function() {
      var testTime = {hours: 14, minutes: 15, seconds: 16}
      var clock = new Clock(testTime)

      var actual = clock.getTime()
      var expected = '14:15:16 PM'
      assert.equal(expected, actual)
    })
    // with 12-hour format input where the seconds are a single-digit value, constructor returns the correct time
    it('function returns correct time with 12-hour format input where the seconds are a single-digit value', function() {
      var testTime = {hours: 11, minutes: 12, seconds: 1}
      var clock = new Clock(testTime)

      var actual = clock.getTime()
      var expected = '11:12:01 AM'
      assert.equal(expected, actual)
    })
    // with 12-hour format input where the minutes are a single-digit value, constructor returns the correct time
    it('function returns correct time with 12-hour format input where the minutes are a single-digit value', function() {
      var testTime = {hours: 11, minutes: 1, seconds: 13}
      var clock = new Clock(testTime)

      var actual = clock.getTime()
      var expected = '11:01:13 AM'
      assert.equal(expected, actual)
    })
    // with 12-hour format input where the hours are a single-digit value, constructor returns the correct time
    it('function returns correct time with 12-hour format input where the hours are a single-digit value', function() {

      var testTime = {hours: 1, minutes: 12, seconds: 13}
      var clock = new Clock(testTime)

      var actual = clock.getTime()
      var expected = '01:12:13 AM'
      assert.equal(expected, actual)
    })
    // with 24-hour format input where the seconds are a single-digit value, constructor returns the correct time
    it('function returns correct time with 24-hour format input where the seconds are a single-digit value', function() {
      var testTime = {hours: 14, minutes: 15, seconds: 1}
      var clock = new Clock(testTime)

      var actual = clock.getTime()
      var expected = '14:15:01 PM'
      assert.equal(expected, actual)
    })
    // with 24-hour format input where the minutes are a single-digit value, constructor returns the correct time
    it('function returns correct time with 24-hour format input where the minutes are a single-digit value', function() {
      var testTime = {hours: 14, minutes: 1, seconds: 16}
      var clock = new Clock(testTime)

      var actual = clock.getTime()
      var expected = '14:01:16 PM'
      assert.equal(expected, actual)
    })
  })
})
