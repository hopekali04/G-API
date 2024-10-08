const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createroom = async (roomNumber, roomType, studentID) => {
    const room = await prisma.room.create({
        data: {
            roomNumber,
            roomType,
            studentID,
        },
    });
    return room;
};
const getrooms = async () => {
    const rooms = await prisma.room.findMany();
    return rooms;
};

const getroomById = async (roomId) => {
    const room = await prisma.room.findUnique({
        where: {
            id: roomId,
        },
    });

    return room;
};

const updateroom = async (roomId, roomNumber, roomType, studentID) => {
    const room = await prisma.room.update({
        where: {
            id: roomId,
        },
        data: {
            roomNumber,
            roomType,
            studentID,
        },
    });

    return room;
};

const deleteroom = async (roomId) => {
    const room = await prisma.room.delete({
        where: {
            id: roomId,
        },
    });

    return room;
};

module.exports = {
    createroom,
    getrooms,
    getroomById,
    updateroom,
    deleteroom,
};