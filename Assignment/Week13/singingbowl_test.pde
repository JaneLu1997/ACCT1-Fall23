import processing.serial.*;
import processing.sound.*;

float[] notes = {660};

SinOsc sineWave;
Env sineEnv;

float attackTime = 2.8;
float sustainTime = 3.4;
float sustainLevel = 1.8;
float releaseTime = 2.7;

float sineWaveLevel = 0.75;

Serial port;

void setup() {
  size(500, 500);

  String portName = "/dev/cu.usbserial-022F27BC";
  port = new Serial(this, portName, 9600);

  sineWave = new SinOsc(this);
  sineEnv = new Env(this);
}

void draw() {
  background(0);

  // Read joystick data and control sound parameters
  if (port.available() > 0) {
    String data = port.readStringUntil('\n');
    if (data != null) {
      data = data.trim();

      // Split the data into an array using a delimiter (assuming data format is "VRX,VRY")
      String[] values = split(data, '\t');

      // Check if the array has at least two values
      if (values.length >= 2) {
        // Convert string values to integers
        int xValue = int(values[0]);
        int yValue = int(values[1]);

        // Print VRX and VRY values to the console
        println("VRX: " + xValue + ", VRY: " + yValue);

        // Use the joystick data to control sound parameters
        updateSound(xValue, yValue);
      }
    }
  }
}

void updateSound(int vrx, int vry) {
  // Map joystick data to control parameters
  float mappedFreq = map(vrx, 0, 4095, 220, 880); // Adjust the frequency mapping as needed
  float mappedLevel = map(vry, 0, 4095, -1, 1); // Adjust the level mapping as needed

  // Play the note with the mapped frequency and adjust the volume
  playNote(mappedFreq, mappedLevel);
}

void playNote(float noteFreq, float level) {
  sineWave.amp(level);
  sineWave.play(noteFreq, 0.75);
  sineEnv.play(sineWave, attackTime, sustainTime, sustainLevel, releaseTime);
}
