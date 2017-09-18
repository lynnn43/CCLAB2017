#include <CapacitiveSensor.h>

/*
 * CapitiveSense Library Demo Sketch
 * Paul Badger 2008
 * Taylor Hokanson 2015
 * Uses a high value resistor e.g. 10M between send pin and receive pin
 * Resistor effects sensitivity, experiment with values, 50K - 50M. Larger resistor values yield larger sensor values.
 * Receive pin is the sensor pin - try different amounts of foil/metal on this pin
 */

CapacitiveSensor sensor1 = CapacitiveSensor(7,6);        // 1M resistor between pins 7 and 6 (6 is sensor pin), add a wire and or foil if desired
int sensorTrip = 150;// Change sensor sensitivity here
int sensorTrip2 = 500;

void setup(){
   Serial.begin(9600);
}

void loop(){

  long lastReading;

  if (lastReading < millis() + 10){        // limits frequency of sensor value checking
    long start = millis();
    long total1 =  sensor1.capacitiveSensor(30);

    //Serial.print(millis() - start);        // check on performance in milliseconds
    //Serial.print("\t");                    // tab character for debug windown spacing

    Serial.println(total1);                  // print sensor output
    //Serial.print("\t");
    
    if (total1 > sensorTrip && total1 < sensorTrip2){               
        tone(13, 500, 10);                  // drive a piezo element at pin A, frequency B, and for C microseconds  
    }else if (total1 > sensorTrip2){               
        tone(13, 800, 250); 
      }
    lastReading = millis();
  }
}
