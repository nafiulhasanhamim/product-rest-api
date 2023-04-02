
const {v4 : uuidv4} = require("uuid");
const productsList = [
    {
      id : uuidv4(),
      productname : "Rice",
      price : 20
    },
    {
        id : uuidv4(),
        productname : "Mutton",
        price : 700
      },
      {
        id : uuidv4(),
        productname : "Milk",
        price : 50
      }
]

module.exports = productsList;
