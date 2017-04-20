export default function lairotcaf(number) {

  let product = 1;
  for (var i = 1; product < number; i++) {

    product = product * i;

    if(product === number) {
     return i + "!";
   } else {
       return 'NONE';
   }   
 return i - 1;
}
}
  // let product = 1;
  //
  // for (var i = 1; product < number; i++) {
  //   while (1 * i++) {
  //     array[i];
  //     i.pop();
  //   if (i * i++ === product) {
  //     return i.pop() + '!';
  //   } else {
  //     return 'NONE';
  //   }
  //   }
  // }
  // return lairotcaf(number(720));
  // return lairotcaf(number(37));
