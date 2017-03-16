export default function stringIndices(string, index) {

  var removeSpecialChar = string.replace(/\W+/g, ' ')
  var strToArr = removeSpecialChar.split(' ')

  if(index > strToArr.length || index <= 0) {
    return ''
  } else {
    return strToArr[index - 1]
  }
}
