/* Make sure the baud rate is set to 9600, if using the Espruino IDE this is defined in Settings > Communications > Baud Rate (this has a dropdown menu to the right)*/

var sensor= B3;
pinMode(sensor, 'input');
var sensorState = 0;
var lastSensorState = 0;

setInterval(

  function () {
  sensorState = digitalRead(sensor);
  if (sensorState != lastSensorState)

    if (sensorState == 1) {
      console.log("sensor is touched");
       digitalWrite(LED2, 1);
    } else {

      console.log("sensor is NOT touched");
       digitalWrite(LED2, 0);
    }


    lastSensorState = sensorState;
  }


  , 1000);
