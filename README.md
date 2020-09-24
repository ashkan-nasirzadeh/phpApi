# phpApi
simple functions/classes that u need when u r developing an api with PHP
## CRUD
### api_addRow(table, data)
example:
```
let nUser = {'fname': 'john', 'lname': 'martin'}
let result = api_addRow('users', nUser)
// result = {'success': true, 'response': {'rCode': 1, 'rMessage': 'new row added'}}
```
### api_readRow(table, data)
example:
```
let reRow = {'fname': 'john'}
let result = api_readRow('users', reRow)
// result = [
    {'ID': '16', 'fname': 'john', 'lname': 'martin', 'cell': '+18978248', 'birth': '8986321489'},
    {'ID': '57', 'fname': 'john', 'lname': 'lopez', 'cell': '+78914624', 'birth': '1237894562'}
]
