# phpApi
simple functions/classes that u need when u r developing an api with PHP
## usage
in your `.js` file :
```
npm install php-api --save
```
## CRUD
### api.addRow(table, data)
example:
```
let nUser = {'fname': 'john', 'lname': 'martin'}
let result = api.addRow('users', nUser)
// result = {
//     'success': true,
//     'status': {
//         'sCode': 1,
//         'sMessage': 'new row added'
//     },
//     response: []
// }
```
### api.readRow(table, data)
example:
```
let reRow = {'fname': 'john'}
let result = api.readRow('users', reRow)
// result = {
//    'success': true,
//    'status': {
//        'sCode': 1,
//        'sMessage': '2 row is valid'
//    },
//    response: [
//        {'ID': '16', 'fname': 'john', 'lname': 'martin', 'cell': '+18978248', 'status': 'online'},
//         {'ID': '57', 'fname': 'john', 'lname': 'lopez', 'cell': '+78914624', 'status': 'offline'}
//     ]
// }
```
### api.updateOne(table, where, set)
updates a row if there is only one row valid for updating
example:
```
let where = {'fname': 'john'}
let set = {'status': 'online', 'cell': '+10101010'}
let result = api.updateOne('users', where, set)
// result = {
//     'success': true,
//     'status': {
//         'sCode': 1,
//         'sMessage': 'requested row has been updated'
//     },
//     response: []
// }
```
### api.updateAll(table, where, set)
updates every row that is valid for updating
example:
```
let where = {'fname': 'john'}
let set = {'status': 'online', 'cell': '+10101010'}
let result = api.updateAll('users', where, set)
// result = {
//     'success': true,
//     'status': {
//         'sCode': 1,
//         'sMessage': 'requested rows has been updated'
//     },
//     response: []
// }
```
### api.dropOne(table, where)
drop a row if there is only one row valid for droping
example:
```
let where = {'fname': 'john'}
let result = api.dropOne('users', where)
// result = {
//     'success': true,
//     'status': {
//         'sCode': 1,
//         'sMessage': 'requested row has been droped'
//     },
//     response: []
// }
```
### api.dropAll(table, where)
drop every row that is valid for droping
example:
```
let where = {'fname': 'john'}
let result = api.dropAll('users', where)
// result = {
//     'success': true,
//     'status': {
//         'sCode': 1,
//         'sMessage': 'requested rows has been droped'
//     },
//     response: []
// }
