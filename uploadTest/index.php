<?php
if (isset($_SERVER['REQUEST_TIME'])) {
    $request_method = $_SERVER['REQUEST_METHOD'];
    $request_time = $_SERVER['REQUEST_TIME'];
    $time = time();
    $upload_time = time() - $_SERVER['REQUEST_TIME'];
    echo '<br>';
    echo 'time(): ' . $time . '<br>';
    echo '$_SERVER["REQUEST_TIME"]: ' . $request_time . '<br>';
    echo 'upoload time :' . $upload_time . '<br>';
    echo "</pre>";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="index.css" type="stylesheet">
    <title>Document</title>
</head>
<body>
    <!-- <form action="http://127.0.0.1/dashboard/uploadTestServer/api.php:12345" method="post" enctype="multipart/form-data"> -->
    <!-- <form action="http://localhost:12345" method="post" enctype="multipart/form-data"> -->
    <form action="http://localhost:12345" method="post" id="myForm">
        <!-- Select image: -->
        <input type="file" name="fileToUpload" id="fileToUpload" value="set file and send">
        <!-- <input type="text" name="fName" id="fileToUpload"> -->
        <input type="submit" value="Upload Image" name="submit">
    </form>
    <script src="jquery.js"></script>
    <script src="dist/main.js"></script>
</body>
</html>