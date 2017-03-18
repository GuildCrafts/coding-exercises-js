var audioContext = new AudioContext();
var oscillator = audioContext.createOscillator();
var gainNode = audioContext.createGain();
oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);
oscillator.type = 'sine';
var frequencies = [ 262,294,330,349,392,440,494,523 ];

oscillator.start();
function playSound(frequency){
  oscillator.frequency.value = frequency;
}

let myNum = 2000
frequencies.forEach( (value) => {
  setTimeout(function(){
    console.log(value)
    playSound(value);
  }, myNum+=2000)
})

 setTimeout(function(){
    oscillator.disconnect()
  }, myNum+=2000)
