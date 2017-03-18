export default function disemVowling(word) {
  const vowels = "aeiou "
  let my_list = word.split("")
  let result = []
console.log(my_list);
  for (var index = 0; index < my_list.length;index++) {
    console.log(my_list[index]);
    if (vowels.indexOf(my_list[index]) < 0 )
      result.push(my_list[index])
    }
  console.log(my_list.join(""))
  return result.join("")
}
