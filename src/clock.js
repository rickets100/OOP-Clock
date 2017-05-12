// ===== CLOCK =====
class Clock {
  constructor(time) {
    if (time) {
      if (time.hours < 24 && time.hours >= 0) {
        this.hours = time.hours
      }
      if (time.minutes < 60 && time.minutes >= 0) {
        this.minutes = time.minutes
      }
      if (time.seconds < 60 && time.seconds >= 0) {
        this.seconds = time.seconds
      }
    }
    else {
      this.hours = 0
      this.minutes = 0
      this.seconds = 0
    }
    this.isTwentyFour = true
  }


  getHours() {
    return this.hours
  }

  setHours(hours) {
    if (hours < 24 && hours >= 0)
    this.hours = hours
  }

  getMinutes() {
    return this.minutes
  }

  setMinutes(minutes) {
    if (minutes < 60 && minutes >= 0) {
      this.minutes = minutes
    }
  }

  getSeconds() {
    return this.seconds
  }

  setSeconds(seconds) {
    if (seconds < 60 && seconds >= 0) {
      this.seconds = seconds
    }
  }

  tick() {
    this.seconds = this.seconds + 1
    if (this.seconds == 60) {
      this.seconds = 0
      this.minutes = this.minutes + 1
      if (this.minutes == 60) {
        this.minutes = 0
        this.hours = this.hours + 1
        if (this.hours == 24) {
          this.hours = 0
        }
      }
    }
  }

    getFormat() {
      if (this.isTwentyFour) {
        return '24-hour format'
      }
      else {
        return '12-hour format'
      }
    }

    toggleFormat() {
      this.isTwentyFour = !(this.isTwentyFour)
    }

    getTime() {
      let displayHours = this.getHours()
      let displayMinutes = this.getMinutes()
      let displaySeconds = this.getSeconds()
      let meridiem = ''

      if (this.getFormat() == '12-hour format') {
        if (displayHours == 12) {
          meridiem = 'PM'
        }
        if (displayHours > 12) {
          displayHours = displayHours - 12
          meridiem = 'PM'
        }
        else {
          meridiem = 'AM'
        }
      } else {
        if (displayHours >= 12) {
          meridiem = 'PM'
      } else {
        meridiem = 'AM'
      }

      // now format as strings
      if (displayHours < 10) {
        displayHours = `0${displayHours}:`
      } else {
        displayHours = `${displayHours}:`
      }

      if (displayMinutes < 10) {
        displayMinutes = `0${displayMinutes}:`
      } else {
        displayMinutes = `${displayMinutes}:`
      }

      if (displaySeconds < 10) {
        displaySeconds = `0${displaySeconds} `
      } else {
        displaySeconds = `${displaySeconds} `
      }

      let time = displayHours + displayMinutes + displaySeconds + meridiem
      console.log('time is ', time)
      return time
    }
  }
}

module.exports = { Clock }
// var clock = new Clock({ hours: 16, minutes: 30, seconds: 15 })
// console.log(clock.getTime())
