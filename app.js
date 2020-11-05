const express = require("express");
const app = express()
const os = require("os");

console.log("Games server starting...");

app.get('/', function (req, res) {
    let remoteAddr = req.connection.remoteAddress;
    console.log("Received request from " + remoteAddr);
    res.end(
        "Received request from " +
        remoteAddr +
        "\n" +
        "You've hit " +
        os.hostname() +
        "\n"
    );
});

app.listen(8080)
