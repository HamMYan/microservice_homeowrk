const express = require("express");
const app = express();
const router = require("./router/index");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/product", router);


app.listen(8081);
