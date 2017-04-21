export default function date() {
  var readlineSync = require('readline-sync');
  var year = yyyy;
  var month = mm;
  var day = dd;
  var d = new Date(yyyy-mm-dd);
  var dateEntry = readlineSync.question('What is the date?')

if(year.length === 4, month.length === 2, day.length === 2) {
  moment().format(YYYY-MM-DD);
  // function makeDate(d) {
  //   let newYear = year <= 2017;
  //   let newDay = day <= 31 && day >= 1;
  //   let newMonth = month <=12 && day >= 1;
  //Return Date Format
  // return year + '-' + month + '-' + day;
  }
  else {
    return 'error';
  }
}
