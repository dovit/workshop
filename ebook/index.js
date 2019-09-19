let fs = require('fs');
let path = require('path');
var readline = require('readline');

var rl = readline.createInterface({input: process.stdin, output: process.stdout, terminal: false});

function manageFile(callback) {
    fs.readFile(path.join(__dirname, 'products.json'), 'utf8', (err, file) => {
        try {
            contents = JSON.parse(file);
            callback(contents);
        } catch (error) {
            console.err('Error while parsing')
        }
    })
}

function getAllProducts() {
    fs.readFile(path.join(__dirname, 'products.json'), 'utf8', (err, file) => {
        try {
            contents = JSON.parse(file);
            console.log(`Bienvenue. Voici les produits disponibles:`);
            contents.forEach(element => {
                console.log(`${element.id} - ${element.name} / ${element.USD_price} / ${element.EUR_price}`);
            });
        } catch (error) {
            console.err('Error while parsing')
        }
    })
}

function orderProductById(id) {
    fs.readFile(path.join(__dirname, 'products.json'), 'utf8', (err, file) => {
        try {
            contents = JSON.parse(file);
            contents.forEach(element => {
                console.log(element.id);
                if (element.id === id) {
                    element.orders_counter++;
                }
            });

            fs.writeFile(path.join(__dirname, 'products.json'), JSON.stringify(contents, null, 2), 'utf8', (err)=>{
                if (err) throw err
                console.log('file saved'); 
            });

        } catch (error) {
            console.error(error);
        }
    })

}

rl.on('line', function(line) {
    console.log(line);
    line = line.trim();
    if (line.indexOf("i want product") === 0) {
        orderProductById(line.split('i want product ')[1]);
    }
})
