import express from 'express'
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js'
import hotel from '../models/hotel.js'
import { verifyAdmin } from '../utils/verifyToken.js'
// import { createError } from '../utils/error.js'

const router = express.Router()

// CREATE Hotel
router.post('/', verifyAdmin, createHotel)

// UPDATE Hotel
router.put('/:id', verifyAdmin, updateHotel)

// Delete Hotel
router.delete('/:id', verifyAdmin, deleteHotel) 

// get Hotel
router.get('/find/:id', getHotel) 

// get All Hotels 
router.get('/', getHotels) 
router.get('/countByCity', countByCity) 
router.get('/countByType', getHotels) 

export default router