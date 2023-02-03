import hotel from "../models/hotel.js"

export const createHotel = async (req, res, next) => {
    const newHotel = new hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err)
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (err) {
        next(err)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await hotel.findbyId(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

export const getHotels = async (req, res, next) => {
    try {
        const hotels = await hotel.find()
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return hotel.countDocuments({city: city})
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}