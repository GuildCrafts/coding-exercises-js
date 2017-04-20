export default function disemvowelments() {

  var str = 'i am groot'
  var arr = str.split('')

  const correctArray = arr.filter(function(element){
    const vowels = ['a','e','i','o','u',' ']
    return !vowels.includes(element);
  }).join('')
  return correctArray;
}
