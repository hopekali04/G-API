// controllers/hostelController.js

const hostelService = require('../services/hostelService');

const createView = async (req, res) => {
    console.log('Creating view');
    res.render("hostels/create")
};
const createHostel = async (req, res) => {
    const { name, address, capacity } = req.body;

    try {
        const hostel = await hostelService.createHostel(name, address, capacity);
        res.redirect("/hostels")
        //res.status(201).json({ success: true, data: hostel });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const getHostels = async (req, res) => {
    try {
        const hostels = await hostelService.getHostels();
        res.render("hostels/landing", { data: hostels });
        //res.json({ success: true, data: hostels });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const getHostelById = async (req, res) => {
    const hostelId = parseInt(req.params.id);

    try {
        const hostel = await hostelService.getHostelById(hostelId);

        if (!hostel) {
            res.status(404).json({ success: false, error: 'Hostel not found' });
        } else {
            res.json({ success: true, data: hostel });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const updateHostel = async (req, res) => {
    const hostelId = parseInt(req.params.id);
    const { name, address, capacity } = req.body;

    try {
        const hostel = await hostelService.updateHostel(hostelId, name, address, capacity);

        if (!hostel) {
            res.status(404).json({ success: false, error: 'Hostel not found' });
        } else {
            res.json({ success: true, data: hostel });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const deleteHostel = async (req, res) => {
    const hostelId = parseInt(req.params.id);

    try {
        const hostel = await hostelService.deleteHostel(hostelId);

        if (!hostel) {
            res.status(404).json({ success: false, error: 'Hostel not found' });
        } else {
            res.json({ success: true, data: hostel });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = {
    createHostel,
    getHostels,
    getHostelById,
    updateHostel,
    deleteHostel,
    createView
};
