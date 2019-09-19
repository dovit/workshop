let fs = require('fs');
let files = fs.readdirSync(__dirname);

files.forEach(file => {
    const contents = fs.readFile(`${__dirname}/${file}`, 'utf8', (err, file) => {
        console.log(err, file);
    })
});
