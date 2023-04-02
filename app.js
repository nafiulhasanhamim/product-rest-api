const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRouter = require("./route/productroute")
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use("/products",productRouter);


module.exports = app;
