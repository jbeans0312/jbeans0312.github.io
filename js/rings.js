let song;
let slider;

function setup() {
  //initiate canvas
  createCanvas(600, 600, WEBGL);

  //load song
  song = loadSound("./audio/moneymachine256.mp3");

  //initilize fft and amp
  fft = new p5.FFT();
  
  //volume slider
  slider = createSlider(0.0, 1.0, 0.1);
  slider.position(10,10)
  slider.style('width','80px');
}

function draw() {
  background(0);
  noStroke();
  let vol = slider.value();

  //analyze sound
  let spectrum = fft.analyze();
  
  //extract frequencies and volume
  let bass = Math.trunc(fft.getEnergy("bass"));
  let mid = Math.trunc(fft.getEnergy("mid"));
  let treble = Math.trunc(fft.getEnergy("treble"));

  //plot frequency toruses
  rotateX(millis() / 1000);
  rotateY(millis() / 1000);
  fill(
    97 * (1 + bass / 150),
    122 * (1 + bass / 150),
    85 * (1 + bass / 150),
    160
  );
  torus(Math.trunc(bass) * 1.2, Math.trunc(bass) / 10);

  rotateY(millis() / 1000);
  rotateZ(millis() / 1000);
  fill(
    255 * (1 + treble / 150),
    248 * (1 + treble / 150),
    214 * (1 + treble / 150),
    160
  );
  torus(Math.trunc(treble) * 1.2, Math.trunc(treble) / 10);

  rotateZ(millis() / 1000);
  rotateX(millis() / 1000);
  fill(115 * (1 + mid / 150), 169 * (1 + mid / 150), 173 * (1 + mid / 150), 160);
  torus(Math.trunc(mid) * 1.1, Math.trunc(mid) / 12);
}

//pauses/plays current song
function mousePressed() {
  togglePlay();
}

function togglePlay() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}
