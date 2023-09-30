// var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('Welcome to this page!');
//     res.end();
// }). listen(3000)

var persegi = require('./module');
var x = 2, y = 2;
console.log("Luas persegi yang memiliki sisi sama dengan 2 adalah "
                + persegi.mult(x, y));

var Keliling_persegi = require('./module');
var x = 4
console.log("keliling persegi yang memiliki sisi sama dengan 4 adalah "
                + persegi.mult(4, x));


const Persegi_panjang = require('./module');
const P = 9, L = 12;
console.log("Luas persegi panjang yang memiliki panjang sama dengan 9 dan lebar sama dengan 12 adalah "
                + Persegi_panjang.mult(P, L));

const keliling_persegipanjang = require('./module');
const p = 5, l = 8;
console.log("Keliling persegi panjang yang memiliki panjang 5 dan lebar 8 adalah "
                + Persegi_panjang.add(p, l)
);





