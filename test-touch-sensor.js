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
