//let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let audioCtx = new AudioContext()

let oscillator = audioCtx.createOscillator();
oscillator.type = 'sawtooth'
//oscillator.frequency.value = 262 //Middle C, C4

let gainNode = audioCtx.createGain()
oscillator.connect(gainNode)
gainNode.connect(audioCtx.destination)

let beat = null
let intervalHandle;

function solfege() {

  if (beat === null) {
    oscillator.start()
    beat++
  }


  if(beat === 1) {
    oscillator.frequency.value = 262 //Middle C
    beat++
    console.log(oscillator.frequency.value)
  } else if (beat === 2) {
    oscillator.frequency.value = 294
    beat++
    console.log(oscillator.frequency.value)
  } else if (beat === 3) {
    oscillator.frequency.value = 330
    beat++
    console.log(oscillator.frequency.value)
  } else if (beat === 4) {
    oscillator.frequency.value = 349
    beat++
    console.log(oscillator.frequency.value)
  } else if (beat === 5) {
    oscillator.frequency.value = 392
    beat++
    console.log(oscillator.frequency.value)
  } else if (beat === 6) {
    oscillator.frequency.value = 440
    beat++
    console.log(oscillator.frequency.value)
  } else if (beat === 7) {
    oscillator.frequency.value = 494
    beat = 1
    console.log(oscillator.frequency.value)
  }
}

function sing() {
  intervalHandle = setInterval(solfege, 1000)
}

function stop() {
  oscillator.stop(audioCtx.currentTime)
  clearInterval(intervalHandle)
  beat = null
}
