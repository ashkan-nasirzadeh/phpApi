var PhpAPI = (function () {
	var conn = {}
	class PhpAPI {
		constructor(apiAddress, serverName, userName, pass, db) {
			this.conn = {}
			this.conn.serverName = serverName	
			this.conn.userName = userName
			this.conn.password = pass
			this.conn.dbName = db
			this.conn.apiAddress = apiAddress
			conn = this.conn
		}
		addRow() {
			return conn;
		}
	}
	return PhpAPI
})()

module.exports = PhpAPI
