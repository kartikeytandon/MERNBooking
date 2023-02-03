import express from 'express'
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE 
router.post('/:hotelid', verifyAdmin, createRoom)

// UPDATE 
router.put('/:id', verifyAdmin, updateRoom)

// Delete 
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom) 

// get         
router.get('/:id', getRoom)

// get All 
router.get('/', getRooms) 

export default router