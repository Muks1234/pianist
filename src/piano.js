import * as Tone from "tone";

let sampler;
let samplerReady = false;

async function initSampler() {
  await Tone.start();

  if (!sampler) {
    sampler = new Tone.Sampler({
      urls: {
        A0: "A0.mp3",
        C1: "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        A6: "A6.mp3",
        C7: "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        A7: "A7.mp3",
        C8: "C8.mp3",
      },
      release: 2,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
      onload: () => {
        samplerReady = true;
        console.log("🎹 Sampler loaded & ready!");
      },
    }).toDestination();
  }
}

export async function playNote(note, duration = "4n") {
  await initSampler();
  if (!samplerReady) {
    console.warn("Sampler not ready yet...");
    return;
  }
  sampler.triggerAttackRelease(note, duration);
}

export async function playScale() {
  await initSampler();
  if (!samplerReady) {
    console.warn("Sampler not ready yet...");
    return;
  }

  const scale = ["C4","D4","E4","F4","G4","A4","B4","C5"];
  let now = Tone.now();

  scale.forEach((note, i) => {
    sampler.triggerAttackRelease(note, "8n", now + i * 0.5);
  });
}
