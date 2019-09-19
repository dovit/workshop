var p1 = new Promise(function(resolve, reject) {
    setTimeout((param) => {
        param['data'] = 'test';
        resolve(param)
    }, 0, []);
});

var p2 = new Promise(function(resolve, reject) {
    setTimeout((param) => {
        resolve(param)
    }, 2000, 'deux')
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout((param) => {
        resolve(param)
    }, 3000, 'trois')
});

var p4 = new Promise(function(resolve, reject) {
    setTimeout((param) => {
        resolve(param)
    }, 4000, 'quatre')
});

var p5 = new Promise((resolve, reject) => {
    setTimeout((param) => {
        console.log(param);
        resolve('reject' + param);
    }, 2500, 'cinq');
})

Promise.all([p1, p2, p3, p4, p5])
.then(values => {
    console.log("race then", values);
})
.catch(reason => {
    console.log("race catch", reason)
});
