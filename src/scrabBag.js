export default function scrabBag(input) {
  let letters = {
    A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2,
    Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1, _: 2
  };

  const totalLetters = 100;

  let arrayLetters = [];
  let remaining = 100 - input.length;
  processLetters(letters, input);
  let answer = setupAnswer(letters, arrayLetters);
  answer.remaining = remaining;
  return answer;
};

function processLetters(letters, input) {
  // refactor this to make it a loop.
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case 'A':
        letters[input[i]]--;
        break;
      case 'B':
        letters[input[i]]--;
        break;
      case 'C':
        letters[input[i]]--;
        break;
      case 'D':
        letters[input[i]]--;
        break;
      case 'E':
        letters[input[i]]--;
        break;
      case 'F':
        letters[input[i]]--;
        break;
      case 'G':
        letters[input[i]]--;
        break;
      case 'H':
        letters[input[i]]--;
        break;
      case 'I':
        letters[input[i]]--;
        break;
      case 'J':
        letters[input[i]]--;
        break;
      case 'K':
        letters[input[i]]--;
        break;
      case 'L':
        letters[input[i]]--;
        break;
      case 'M':
        letters[input[i]]--;
        break;
      case 'N':
        letters[input[i]]--;
        break;
      case 'O':
        letters[input[i]]--;
        break;
      case 'P':
        letters[input[i]]--;
        break;
      case 'Q':
        letters[input[i]]--;
        break;
      case 'R':
        letters[input[i]]--;
        break;
      case 'S':
        letters[input[i]]--;
        break;
      case 'T':
        letters[input[i]]--;
        break;
      case 'U':
        letters[input[i]]--;
        break;
      case 'V':
        letters[input[i]]--;
        break;
      case 'W':
        letters[input[i]]--;
        break;
      case 'X':
        letters[input[i]]--;
        break;
      case 'Y':
        letters[input[i]]--;
        break;
      case 'Z':
        letters[input[i]]--;
        break;
      case '_':
        letters[input[i]]--;
        break;
    }
  }
};

function setupAnswer(letters, arrayLetters) {
  let answer = {};
  for (let i in letters) {
    // console.log('these are the keys', i);
    // console.log('these are the values', letters[i]);
    if (!answer.hasOwnProperty(letters[i])) {
      answer[letters[i]] = i;
    }
    else {
      answer[letters[i]] = answer[letters[i]] + ', ' + i;
    }
  }
  return answer;
};
