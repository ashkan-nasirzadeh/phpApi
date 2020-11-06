const phpAPI = require('php-api')
// var api = new phpAPI('http://api.chibeka.ir/', 'localhost', 'root', '', 'phpAPITest')
var api = new phpAPI('http://localhost/dashboard/apiServer/Router.php', 'localhost', 'root', '', 'phpapi')
/**********
 * addRow *
 **********/
const then = function (res) {
    console.log(res)
}
api.addRow(then);
/************
 * readRows *
 ************/
// function then (res) {
//     // let output = JSON.parse(res.output);
//     // console.log(output);
//     console.log(res);
// }
// api.readRows(then);
/************************
 * isColumnHashVerified *
 ************************/
// function then (res) {
//     // let output = JSON.parse(res.output);
//     // console.log(output);
//     console.log(res);
// }
// let stringFromClientToVerify = '223';
// api.checkColumnHashVerified(stringFromClientToVerify, then);
/**************
 * updateRows *
 **************/
// function then (res) {
//     // let output = JSON.parse(res.output);
//     // console.log(output);
//     console.log(res);
// }
// api.updateRows(then);
/**************
 * deleteRows *
 **************/
// function then (res) {
//     // let output = JSON.parse(res.output);
//     // console.log(output);
//     console.log(res);
// }
// api.deleteRows(then);
/*****************
 * searchColumns *
 *****************/
// function then (res) {
//     // let output = JSON.parse(res.output);
//     // console.log(output);
//     console.log(res);
// }
// api.searchRows(then);