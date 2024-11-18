import productModel from "../../Models/ProductModel.js"

export const listProducts = async (req,res) => {
    try {
        const products = await productModel.find({})
        return res.status(200).json({
            success : true,
            products
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            error: error.message
        })
        
    }
}