var p1 = new Promise(function(resolve, reject) {
    console.log('ici');
    setTimeout((param) => {
        resolve(param)
    }, 2000, 'un')
});

async function myFunction() {
    await p1;
    console.log('après promise');
}

myFunction();