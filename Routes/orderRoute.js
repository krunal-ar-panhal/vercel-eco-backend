import express from 'express'
import { adminAuth } from '../Middleware/adminAuth.js'
import { allOrders } from '../Controllers/orderController.js/allOrdersAdmin.js'
import { updateStatus } from '../Controllers/orderController.js/updateOrderStatusAdmin.js'
import { verifyToken } from '../Middleware/verfyToken.js'
import { placeOrderCod } from '../Controllers/orderController.js/placeOrderCod.js'
import { placeOrderStripe } from '../Controllers/orderController.js/placeOrderStripe.js'
import { placeOrderRazorpay } from '../Controllers/orderController.js/placeOrderRazorpay.js'
import { userOrders } from '../Controllers/orderController.js/userOrders.js'

const router = express.Router()

router.post('/list',adminAuth,allOrders)
router.post('/status',adminAuth,updateStatus)

router.post('/place',verifyToken,placeOrderCod)
router.post('/stripe',verifyToken,placeOrderStripe)
router.post('/razorpay',verifyToken,placeOrderRazorpay)

router.post('/userorder',verifyToken,userOrders)

export default router