const fs = require('fs');

fs.writeFileSync('info.txt', 'Test text !!!');

fs.readFile('info.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

