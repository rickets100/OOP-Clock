# Clock OOP

Practice OOP concepts and testing with this clock building activity!


### Entry Ticket

Students should have learned the following in order to work on this repository:

* Object Oriented Programming with JavaScript

* The `this` keyword

* Constructors and prototypes

* Writing tests with Mocha/Chai

* The basics of requiring and exporting with node and installing packages with npm


### Setup

To get started, you _only_ need to do the following:

* Fork and then clone this repository

* Run `npm install` to install dependencies

* Run `npm run linter` to have gulp run the linter

* In a new terminal tab (same folder), run `npm test` to run mocha


### Instructions

You will be building a Clock constructor than can build new clock instances, each of which should be able to do the following:

* When initialized, should be set to midnight in 24 hour format. That is, 0 hours, 0 minutes, 0 seconds.

* When initialized, takes an optional object which can manually set the clock to a specific time. For example:

  ```javascript
  var clock = new Clock({ hours: 16, minutes: 30, seconds: 15 });
  // The clock's current time is 16:30:15
  ```

* Has the following setter and getter methods:

  ```javascript
  var clock = new Clock();

  clock.setHours(5);
  clock.getHours(); // Returns 5

  clock.setMinutes(50);
  clock.getMinutes(); // Returns 50

  clock.setSeconds(32);
  clock.getSeconds(); // Returns 32
  ```

* If you attempt the set the clock (by initialization or the above methods) to a time that doesn't make sense, it doesn't change that unit.

  ```javascript
  var clock = new Clock({ hours: 23, minutes: 58, seconds: 120 });
  // clock is currently set to 23:58:00 -- ignores setting seconds

  clock.setHours(-1);
  // clock is currently set to 23:58:00 -- ignores negative numbers

  clock.setMinutes(66)
  // clock is currently set to 23:58:00 -- ignores invalid measurement
  ```

* Has a `.tick()` function which increases the clock count by 1 second. If the clock reaches 60 seconds, it resets seconds to 0 and increases the minute. If the minutes reach 60, resets minutes and increases hours. If hours reaches 24, resets the entire clock back to midnight.

* Has `.getFormat()` and `.toggleFormat()` methods which returns/switches between two potential ways to display the clock information.

  ```javascript
  var clock = new Clock();
  clock.getFormat(); // '24-hour format'
  clock.toggleFormat();
  clock.getFormat(); // '12-hour format'
  ```

* Has a `.getTime()` function which returns the current time as a string, constructed according to the current format. Numbers are padded with 0s.

  ```javascript
  var clock = new Clock({ hours: 16 });
  clock.getTime(); // '16:00:00'

  clock.tick();
  clock.getTime(); // '16:00:01'

  clock.getFormat(); // '24-hour format'
  clock.toggleFormat();
  clock.getFormat(); // '12-hour format'
  clock.getTime(); // '04:00:01 PM'
  ```


### Stretch Goals

Already finished!? See if you have _time_ to get to these:

* Write a method on the constructor that allows you to get the times of all the clocks that have currently been made in the format they are set to.

  ```javascript
  var clock1 = new Clock({ hours: 12, minutes: 30 });
  clock1.toggleFormat();

  var clock2 = new Clock({ hours: 6, minutes: 15 });

  var clock3 = new Clock({ hours: 18, minutes: 45 });
  clock3.toggleFormat();

  Clock.getAllTimes(); // ['12:30:00 PM', '06:15:00', '06:45:00 PM']
  ```

* Allow for chaining of the `.tick()` method so that you can tick the clock multiple times.

  ```javascript
  var clock = new Clock({ hours: 1, minutes: 59, seconds: 58 });
  clock.tick().tick().tick().getTime(); // '02:00:01'
  ```
