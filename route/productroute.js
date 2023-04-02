const {getAllProducts,createProduct,updateProduct,deleteProduct} = require("../controllers/productController");

const router = require("express").Router();


router.get("/",getAllProducts);
router.post("/",createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

module.exports = router;