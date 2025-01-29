const products = require("../model/products")
const getAllProduct = async (req,res)=>{
    try {
        let allProduct = await products.find({})
        res.json({
            "message" : "List of products",
            "success": "true",
            "data" : allProduct
        })
    } catch (error) {
        res.json({
            "message" : "List of products",
            "success" : "false",
            "data" : allProduct
        })
    }
}

module.exports = getAllProduct;