export default function subtractTiles(letters) {

let tiles = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
  _: 2
}


for(let i = 0; i < letters.length; i++ ) {
  let currentLetter = letters[i]
  for (let keys in tiles) {
    if(keys === currentLetter) {
      tiles[keys] = tiles[keys] - 1
    }
  }
}

return tiles
}

function listCreate(object) {

  let listObject = {}

  for (let keys in object) {
    if(!(listObject.hasOwnProperty(object[keys]))){
      listObject[object[keys]] = [keys]
    } else {
      listObject[object[keys]].push(keys)
    }
  }
  return listObject
}


function scrabBag(letters) {

 let gameTiles = subtractTiles(letters);

 let list = listCreate(gameTiles)

 return list

}

// scrabBag("AERETOXMYCNS_B")
