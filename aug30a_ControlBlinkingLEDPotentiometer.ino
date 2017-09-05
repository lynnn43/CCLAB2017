
const int pot = A0;  // Analog input pin that the potentiometer is attached to
const int ledValue = 9; // Analog output pin that the LED is attached to

int potValue = 0;        // value read from the pot
int LED = 0;        // value output to the PWM (analog out)

void setup() {
  Serial.begin(9600);
}

void loop() {
  potValue = analogRead(pot);
  // map it to the range of the analog out:
  LED = map(potValue, 0, 1023, 0, 255);
  // change the analog out value:
  analogWrite(ledValue, LED);

  // print the results to the Serial Monitor:
  Serial.print("sensor = ");
  Serial.print(potValue);
  Serial.print("\t LED Value = ");
  Serial.println(ledValue);

  // wait 2 milliseconds before the next loop for the analog-to-digital
  // converter to settle after the last reading:
  delay(2);
}
