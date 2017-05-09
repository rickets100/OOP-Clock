// ===== CLOCK =====
class Clock {
  constructor(time) {
    if (time) {
      if (time.hours <= 24 && time.hours >= 0) {
        this.hours = time.hours
      }
      if (time.minutes <= 60 && time.minutes >= 0) {
        this.minutes = time.minutes
      }
      if (time.seconds <= 60 && time.seconds >= 0) {
        this.seconds = time.seconds
      }
    }
    else {
      this.hours = 0
      this.minutes = 0
      this.seconds = 0
    }
  }

  getHours() {
    return this.hours
  }

  setHours(hours) {
    this.hours = hours
  }

  getMinutes() {
    return this.minutes
  }

  setMinutes(minutes) {
    this.minutes = minutes
  }

  getSeconds() {
    return this.seconds
  }

  setSeconds(seconds) {
    this.seconds = seconds
  }
}
