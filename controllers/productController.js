let productsList = require("../models/productsList")
const {v4 : uuidv4} = require("uuid");


const getAllProducts = (req,res) => {
    res.status(200).json(productsList)
}

const createProduct = (req,res) => {
    const newUser = {
        id : uuidv4(),
        productname : req.body.productname,
        price : req.body.price
    }
    productsList.push(newUser);
    res.status(200).json({productsList})
}

const updateProduct = (req,res) => {
    const pid = req.params.id;
    const {productname,price} = req.body;
    productsList
    .filter((product)=> product.id===pid)
    .map((selected)=> {
        selected.productname = productname;
        selected.price = price;
    })

    res.status(200).json({productsList})
}

const deleteProduct = (req,res) => {
    const pid = req.params.id;
    productList = productsList.filter((product)=>product.id !==pid);
}

module.exports = {getAllProducts,createProduct,updateProduct,deleteProduct};