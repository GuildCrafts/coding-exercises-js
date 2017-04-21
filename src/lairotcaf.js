export default function lairotcaf(integer) {

  let sum = 1
  let i = 1
  while ( sum !== integer) {
    i++
    sum = sum * i

    if (sum > integer) {
      return "NONE"
    }
  }
  return i
}

// lairotcaf(720)
