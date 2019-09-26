const request = require('request');
const url = process.argv.slice(2,3).join('');
const file = process.argv.slice(3).join('')
const fs = require('fs');

const writeFileAsync = function (url) {
  request(url, function(err, response, body) {
  if (err) {
    console.log('error');
  } else {
    fs.writeFile(file, body, function (err) {
    });
    let length = response.headers['content-length']
    console.log(`Downloaded and saved ${length} bytes to ${file}`);
  }
})}

writeFileAsync(url);
