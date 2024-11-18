import express from 'express'
import userSignup from '../Controllers/userController/userSignup.js'
import userLogin from '../Controllers/userController/userLogin.js'
import { adminLogin } from '../Controllers/userController/adminLogin.js'
import upload from '../Middleware/multer.js'

const router = express.Router()

router.post('/signup',upload.single("image"),userSignup)
router.post('/signin',userLogin)
router.post('/admin',adminLogin)

export default router;