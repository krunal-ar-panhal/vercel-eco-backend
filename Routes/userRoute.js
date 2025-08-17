import express from 'express'
import userSignup from '../Controllers/userController/userSignup.js'
import userLogin from '../Controllers/userController/userLogin.js'
import upload from '../Middleware/multer.js'
import { verifyToken } from '../Middleware/verfyToken.js'
import { userUpdate } from '../Controllers/userController/userUpdate.js'
import userGet from '../Controllers/userController/userGet.js'
import userDelete from '../Controllers/userController/userDelete.js'

const router = express.Router()

router.post('/signup',userSignup)
router.post('/signin',userLogin)
router.put('/update', verifyToken, upload.single('image'), userUpdate);
router.get('/get',verifyToken,userGet)
router.delete('/delete',verifyToken,userDelete)

export default router;