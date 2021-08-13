var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./view");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

app.get("/admin", function (req, res) {
    res.send("Hello Admin!");
});

