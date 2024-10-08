// controllers/roomController.js

const roomService = require('../services/roomService');

const createroom = async (req, res) => {
    const { roomNumber, roomType, studentID } = req.body;

    try {
        const room = await roomService.createroom(roomNumber, roomType, studentID);
        res.status(201).json({ success: true, data: room });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const getrooms = async (req, res) => {
    try {
        const rooms = await roomService.getrooms();
        res.json({ success: true, data: rooms });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const getroomById = async (req, res) => {
    const roomId = parseInt(req.params.id);

    try {
        const room = await roomService.getroomById(roomId);

        if (!room) {
            res.status(404).json({ success: false, error: 'room not found' });
        } else {
            res.json({ success: true, data: room });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const updateroom = async (req, res) => {
    const roomId = parseInt(req.params.id);
    const { roomNumber, roomType, studentID } = req.body;

    try {
        const room = await roomService.updateroom(roomId, roomNumber, roomType, studentID);

        if (!room) {
            res.status(404).json({ success: false, error: 'room not found' });
        } else {
            res.json({ success: true, data: room });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const deleteroom = async (req, res) => {
    const roomId = parseInt(req.params.id);

    try {
        const room = await roomService.deleteroom(roomId);

        if (!room) {
            res.status(404).json({ success: false, error: 'room not found' });
        } else {
            res.json({ success: true, data: room });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = {
    createroom,
    getrooms,
    getroomById,
    updateroom,
    deleteroom,
};
