var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var mangAds = [
    new QuangCao("gongcha.jpg", "http://drthanh.com"),
    new QuangCao("drthanh.jpg", "http://gongcha.com"),
    new QuangCao("vinamilk.jpg", "http://vinamilk.com"),
]

app.get("/admin", function (req, res) {
    res.render("admin", { mangQC: mangAds });
});

function QuangCao(hinh, link) {
    this.Hinh = hinh;
    this.Link = link;
}