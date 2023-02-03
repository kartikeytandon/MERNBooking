import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and is autherized to delete your account/data")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello user, you are logged in and is autherized to delete all account/data")
// })

// UPDATE User
router.put('/:id', verifyUser, updateUser)

// Delete User
router.delete('/:id', deleteUser, deleteUser) 

// get User
router.get('/:id', verifyUser, getUser) 

// get All Users
router.get('/', verifyAdmin, getUsers) 

export default router