/* ESPRUINO LUNAR LANDER CONTROLLER */

/* The Lunar Lander found on http://moonlander.seb.ly/  is played with the following key presses/clicks:

Start: Mouse Clicked
 - ^ Up arrow: thrusts, increases velocity
 - > Left arrow: turns Lunar Lander to the left
 - < Right arrow: turns Lunar Lander to the left

What follows is a piece of Javascript code that turns a device powered with a Espruino Pico into a controller for this game, using using the USB HID module (https://www.espruino.com/modules/USBKeyboard.js)

*/

/* INCLUSION OF LIBRARIES / MODULES */

  // Require USB HID keyboard module
    var keyboard = require("USBKeyboard");

  // Require USB HID mouse module
    var mouse = require("USBMouse");

/* VARIABLE DEFINITION AND PIN SETUP */

  // Right Arrow Sensor, Blue, B3
    var rightSensor= B3;
    pinMode(rightSensor, 'input');

  // Start Sensor, Yellow, B4
    var startSensor= B4;
    pinMode(startSensor, 'input');

  // Thrust Sensor, Up Arrow, White, B5
    var thrustSensor= B5;
    pinMode(thrustSensor, 'input');

  // Left Arrow Sensor, Green, B6
    var leftSensor= B6;
    pinMode(leftSensor 'input');

/* PROGRAM */

// The following are event listeners, one for each sensor. When the listener detects a touch, it triggers the corresponding keypress

// EVENT LISTENER for Right Arrow Sensor, Blue, B3

  setWatch(
  	function(rightSensorTouched) {
    //trigger right arrow
    kb.tap(kb.KEY.RIGHT);
    console.log("Right sensor is touched");
  	},

   rightSensor,
   { repeat: true, edge: 'rising', debounce: 50 }
   );

 // EVENT LISTENER for Start Sensor, Yellow, B4

   setWatch(
   	function(startSensorTouched) {
     //trigger mouse click
     mouse.send(0,0,mouse.BUTTONS.MIDDLE);
     console.log("Mouse has been clicked");
   	},

    startSensor,
    { repeat: true, edge: 'rising', debounce: 50 }
    );


    // EVENT LISTENER for Thrust Sensor, Up Arrow, White, B5

      setWatch(
       function(thrustSensorTouched) {
        //trigger mouse click
        kb.tap(kb.KEY.UP);
        console.log("Thrust/UP sensor is touched");
       },

       thrustSensor,
       { repeat: true, edge: 'rising', debounce: 50 }
       );

       // EVENT LISTENER for Left Arrow Sensor, Green, B6

         setWatch(
          function(thrustSensorTouched) {
           //trigger mouse click
           kb.tap(kb.KEY.LEFT);
           console.log("Left sensor is touched");
          },

          leftSensor,
          { repeat: true, edge: 'rising', debounce: 50 }
          );
       

// It's important to save the software on the Pico, as it needs to be unplugged in order to be read as a USB HID device
save();


//
