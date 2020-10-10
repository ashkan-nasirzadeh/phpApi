const axios = require('axios');
var PhpAPI = (function () {
	var conn = {};
	class PhpAPI {
		constructor(apiAddress, serverName, userName, pass, db) {
			this.conn = {};
			this.conn.serverName = serverName;	
			this.conn.userName = userName;
			this.conn.pass = pass;
			this.conn.db = db;
			this.conn.apiAddress = apiAddress;
			conn = this.conn;
		}
		addRow() {
			axios.post(conn.apiAddress, {
				// serverName: conn.serverName,
				// userName: conn.userName,
				// pass: conn.pass,
				// db: conn.db
				a: 1,
				c: 2
			  })
			  .then(function (response) {
				console.log(response);
			  })
			  .catch(function (error) {
				console.log(error);
			  });
		}
	}
	return PhpAPI;
})()

module.exports = PhpAPI;
