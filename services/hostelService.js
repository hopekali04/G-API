const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createHostel = async (name, address, capacity) => {
    capacity = parseInt(capacity, 10);
    const hostel = await prisma.hostel.create({
        data: {
            name,
            address,
            capacity,
        },
    });

    return hostel;
};

const getHostels = async () => {
    const hostels = await prisma.hostel.findMany();
    return hostels;
};

const getHostelById = async (hostelId) => {
    const hostel = await prisma.hostel.findUnique({
        where: {
            id: hostelId,
        },
    });

    return hostel;
};

const updateHostel = async (hostelId, name, address, capacity) => {
    const hostel = await prisma.hostel.update({
        where: {
            id: hostelId,
        },
        data: {
            name,
            address,
            capacity,
        },
    });

    return hostel;
};

const deleteHostel = async (hostelId) => {
    const hostel = await prisma.hostel.delete({
        where: {
            id: hostelId,
        },
    });

    return hostel;
};

module.exports = {
    createHostel,
    getHostels,
    getHostelById,
    updateHostel,
    deleteHostel,
};
