const axios = require('axios');
document.getElementById('fileToUpload').addEventListener('change', uImage)
function uImage (event) {
	let data = new FormData();
	let file = event.target.files[0];
	// document.getElementById('file').files[0]
	data.append("file", file);
	data.append("task", "uploadPhoto");
	data.append("JWT", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDM2MTE1ODYsImV4cCI6MTYwMzY4MDE4NiwiZGF0YSI6eyJzdWNjZXNzIjpmYWxzZSwic3RhdHVzIjp7InNDb2RlIjozLCJzTWVzc2FnZSI6ImEgZmlsZSB3aXRoIHNhbWUgcGF0aCBleGlzdHMifSwib3V0cHV0IjpbXX19.LJkxUwpGmHOZ4WMAOGbfRitc5HRoHdYITeGMmoUhgS");
	axios.post('http://127.0.0.1/dashboard/apiServer/Router.php', data ,{
		headers: {
		'accept': 'application/json',
		'Content-Type': 'multipart/form-data;'
	  },
	  onUploadProgress: (progressEvent) => {
		const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
		if (totalLength !== null) {
			let uploadedFileParcentage = Math.round( (progressEvent.loaded * 100) / totalLength );
            /*****************************************************************************
             * you can update the progressbar displayer with uploadedFileParcentage here *
             *****************************************************************************/
		}
	  }
	})
	.then(function (response) {
		console.log('success');
		console.log(response.data)
	})
	.catch(function (error) {
		console.log('error');
		console.log(error);
	});
}