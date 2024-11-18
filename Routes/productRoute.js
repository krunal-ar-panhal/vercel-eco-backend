import express from "express";
import { addProduct } from "../Controllers/productController/addProduct.js";
import { removeProduct } from "../Controllers/productController/removeProduct.js";
import { signleProduct } from "../Controllers/productController/signleProduct.js";
import { listProducts } from "../Controllers/productController/listProducts.js";
import upload from "../Middleware/multer.js";
import { adminAuth } from "../Middleware/adminAuth.js";

const router = express.Router();

router.post("/add",adminAuth,upload.fields([{name:"image1", maxCount:1},{name:"image2", maxCount:1},{name:"image3", maxCount:1},{name:"image4", maxCount:1}]), addProduct);
router.delete("/remove", removeProduct);
router.get("/single", signleProduct);
router.get("/list", listProducts);

export default router;
