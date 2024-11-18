import productModel from "../../Models/ProductModel.js"

export const removeProduct = async (req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        return res.status(200).json({
            success : true,
            message : "product deleted"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            error: error.message
        })
    }
}