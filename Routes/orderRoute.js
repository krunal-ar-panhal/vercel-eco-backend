import express from 'express'
import { allOrders } from '../Controllers/orderController.js/allOrdersAdmin.js'
import { updateStatus } from '../Controllers/orderController.js/updateOrderStatusAdmin.js'
import { verifyToken } from '../Middleware/verfyToken.js'
import { placeOrderCod } from '../Controllers/orderController.js/placeOrderCod.js'
import { userOrders } from '../Controllers/orderController.js/userOrders.js'

const router = express.Router()

router.get('/list',verifyToken,allOrders)
router.post('/status',verifyToken,updateStatus)

router.post('/place',verifyToken,placeOrderCod)


router.post('/userorder',verifyToken,userOrders)

export default router