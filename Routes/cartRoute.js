import express from 'express'
import { updateCart } from '../Controllers/cartController/updateCart.js';
import { getUserCart } from '../Controllers/cartController/getUserCart.js';
import { verifyToken } from '../Middleware/verfyToken.js';
import { addToCart } from '../Controllers/cartController/addToCart.js';

const router= express.Router()

router.post('/add',verifyToken,addToCart)
router.post('/update',verifyToken,updateCart)
router.get('/get',verifyToken,getUserCart)

export default router;