export default function gate(string) {
  let actions = string.split(",")

  let gate = {Gate:"CLOSED"}
  let gateTracker = ["Gate: CLOSED"]
 for(let i = 0; i < actions.length; i++) {

    if(gate.Gate === "CLOSED" && actions[i] === "remoteClicked") {
      gate.Gate = "OPENING"
    } else if(gate.Gate === "OPENING" && actions[i] === "cycleComplete") {
      gate.Gate = "OPEN"
    } else if(gate.Gate === "OPEN" && actions[i] === "remoteClicked") {
      gate.Gate = "CLOSING"
    } else if(gate.Gate === "CLOSING" && actions[i] === "cycleComplete") {
      gate.Gate = "CLOSED"
    } else if(gate.Gate === "OPENING" && actions[i] === "remoteClicked") {
      gate.Gate = "STOPPED_WHILE_OPENING"
    } else if(gate.Gate === "CLOSING" && actions[i] === "remoteClicked") {
      gate.Gate = "STOPPED_WHILE_CLOSING"
    } else if(gate.Gate === "STOPPED_WHILE_OPENING" && actions[i] === "remoteClicked") {
      gate.Gate = "CLOSING"
    } else if(gate.Gate === "STOPPED_WHILE_CLOSING" && actions[i] === "remoteClicked") {
      gate.Gate = "OPENING"
    }
   gateTracker.push(`Gate: ${gate.Gate}`)
 }

    return gateTracker

}

// Proud of how much better I'm getting at psuedocoding =)
// Possible states
// Xif closed then clicked means OPENING
// Xif if opening and cycle complete then OPEN
// Xif OPEN remote clicked then CLOSING
// Xif closing and cycle complete then CLOSED

// if opening and clicked then STOPPED WHILE OPENING
//if closing and clicked then STOPPED WHILE CLOSING
//if STOPPED WHILE CLOSING and clicked then OPENING
//if STOPPEDN WHILE OPENING clicked then CLOSING

// gate("remoteClicked,cycleComplete,remoteClicked,remoteClicked,remoteClicked,remoteClicked,remoteClicked,cycleComplete")
