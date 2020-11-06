# phpAPI-clientSide for web
**PHP API** is simple functions/classes that you need when you are developing an API with PHP and MySQL, it consists of three package:

[phpAPI-clientSide for web (written in javascript)]()

[phpAPI-clientSide for flutter (written in dart)]()

[phpAPI-serverSide (written in PHP)]()

all of the source code of these project is under [PNC-1 standard](https://github.com/kia-nasirzadeh/PNC-1/blob/master/README.md)

## usage
in your front-end :
```
npm install php-api --save
```
```
const phpAPI = require('php-api')
var api = new phpAPI('secretKey', 'apiAddress', 'serverName', 'uName', 'pass', 'db')
```
in your back-end:

be sure that you are using PHP 7.3 or higher

```
composer require kia_nasirzadeh/phpapi_serverside
```

and in your `api.address.php.com` :

``` 
<?php
require_once __DIR__.'/vendor/autoload.php';
use phpAPI\phpAPI;
```

## learning about arguments:

### table (string)

the name of the table that you want to perform a crud task on it (e.g. `'users'`)

### data (object)

a group of key/values (column names/values) that will be used be crud functions to perform a crud task

### hash

a group of key/values (column names/hash types) which will be used with adding/reading functions to hash/unhash a value before-adding-to-db/after-reading-from-db

a list of all possible hash types are available [here](https://www.php.net/manual/en/function.hash-algos.php)

### then

a function that will be triggered after a crud task. it accepts one argument (assume it as *res*) and always if `res.success == true` or `res.status.sCode == 1`  that means a successful crud process

every *res* object has at least three keys and a structure like this:

```
{
	success: true,
	status: {
		sCode: 1,
		sMessage: 'new row added successfully'
	},
	output: ... // usually its an json array
}
```



## CRUD

### api.addRow(table, data, hash = {}, then = false)
example:
```
let nUser = {'fname': 'john', 'lname': 'martin', 'pass':'1234'}
let columnsToHash = {'pass': 'md5'}
function then (res) { if (res.success) ... }
api.addRow('usersTable', nUser, columnsToHash, then)
// res = {
//     success: true,
//     status: {
//         sCode: 1,
//         sMessage: 'new row added'
//     },
//     output: []
// }
```
### api.readRows(table, where, unhash = {}, then = false)
example:
```
let where = {'ID': '16'}
let columnsToUnhash  = {'pass': 'md5'}
function then (res) { if (res.success) ... }
api.readRow('usersTable', where, columnsToUnhash, then)
// res = {
//    success: true,
//    status: {
//        sCode: 1,
//        sMessage: '2 row returned',
		  rowsCount: 2
//    },
//    output: [
//        {'ID': '16', 'fname': 'john', 'lname': 'martin', 'cell': '+18978248', 'status': 'online'}
//     ]
// }
```
### api.readRange(table, 'FROM_CERTAIN_ROW_NUMBER', [min, max], where)

the response will be all the rows that satisfy *where conditions* and from row number *min* till row number *max*

### api.readRange(table, 'FROM_CERTAIN_COLUMN_VALUE', [{ID:n}, m], where)

the response will be all the rows that satisfy *where condition* and from the *row with id=n* till *next m  

### api.updateOne(table, where, set)

updates a row if there is only one row valid for updating
example:

```
let where = {'fname': 'john'}
let set = {'status': 'online', 'cell': '+10101010'}
let res = api.updateOne('usersTable', where, set)
// result = {
//     'success': true,
//     'status': {
//         'sCode': 1,
//         'sMessage': 'requested row has been updated'
//     },
//     output: []
// }
```
### api.updateAll(table, where, set)
updates every row that is valid for updating
example:
```
let where = {'fname': 'john'}
let set = {'status': 'online', 'cell': '+10101010'}
let result = api.updateAll('usersTable', where, set)
// res = {
//     'success': true,
//     'status': {
//         'sCode': 1,
//         'sMessage': 'requested rows has been updated'
//     },
//     output: []
// }
```
### api.dropOne(table, where)
drop a row if there is only one row valid for droping
example:
```
let where = {'fname': 'john'}
let result = api.dropOne('usersTable', where)
// res = {
//     'success': true,
//     'status': {
//         'sCode': 1,
//         'sMessage': 'requested row has been droped'
//     },
//     output: []
// }
```
### api.dropAll(table, where)
drop every row that is valid for droping
example:

```
let where = {'fname': 'john'}
let result = api.dropAll('usersTable', where)
// res = {
//     'success': true,
//     'status': {
//         'sCode': 1,
//         'sMessage': 'requested rows has been droped'
//     },
//     output: []
// }

```