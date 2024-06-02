const express = require("express");
const app = express();
const router = require("./router/index");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const { getUsersProduct } = require("./service");

app.use("/users", router);
app.get('/getUsersProduct/:id',getUsersProduct)


app.listen(8080);

