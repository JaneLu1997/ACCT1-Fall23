const int xPin = A1; // Connect X-axis of joystick to this pin
const int yPin = A0; // Connect Y-axis of joystick to this pin
const int buttonPin = 21; // Connect the button to this pin

void setup() {
  Serial.begin(9600);
}

void loop() {
  int xValue = analogRead(xPin);
  int yValue = analogRead(yPin);
  int buttonState = digitalRead(buttonPin);

  Serial.print("X: ");
  Serial.print(xValue);
  Serial.print("\tY: ");
  Serial.print(yValue);
  Serial.print("\tButton: ");
  Serial.println(buttonState);

  //delay(1000); // Adjust the delay as needed
}
