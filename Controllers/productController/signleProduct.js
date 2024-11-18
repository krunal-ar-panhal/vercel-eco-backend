import productModel from "../../Models/ProductModel.js"

export const signleProduct = async (req,res) => {
    try {
        const {productId} = req.body
        const product = await productModel.findById(productId)
        return res.status(200).json({
            success : true,
            product
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            error: error.message
        })
    }
}