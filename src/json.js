export default function json(sampleJson) {
  if(sampleJson instanceof Object) {
    for(let key in sampleJson) {
      if(sampleJson[key] === '4chan') {
        return key;
      }
      else if(sampleJson[key] instanceof Object) {
        for(let index in sampleJson[key]) {
          if(sampleJson[key][index] === '4chan') {
            return key+' -> '+index;
          }
          else if(sampleJson[key][index] instanceof Object) {
            for(let value in sampleJson[key][index]) {
              if(sampleJson[key][index][value] === '4chan') {
                return key+' -> '+index+' -> '+value;
              }
            }
          }
        }
      }
    }
  }
}
// var blah = require('../test/utilities/sampleJson.json');
// console.log(json(blah));
