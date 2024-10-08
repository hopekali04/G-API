// services/studentService.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createStudent = async (name, gender, dateOfBirth, phone, address, roomID) => {
    roomID = parseInt(roomID, 10);
    const student = await prisma.student.create({
        data: {
            name,
            gender,
            dateOfBirth,
            phone,
            address,
            roomID,
        },
    });

    return student;
};

const getStudents = async () => {
    const students = await prisma.student.findMany();
    return students;
};

const getStudentById = async (studentId) => {
    const student = await prisma.student.findUnique({
        where: {
            id: studentId,
        },
    });

    return student;
};

const updateStudent = async (studentId, name, gender, dateOfBirth, phone, address, roomID) => {
    roomID = parseInt(roomID, 10);
    const student = await prisma.student.update({
        where: {
            id: studentId,
        },
        data: {
            name,
            gender,
            dateOfBirth,
            phone,
            address,
            roomID,
        },
    });

    return student;
};

const deleteStudent = async (studentId) => {
    const student = await prisma.student.delete({
        where: {
            id: studentId,
        },
    });

    return student;
};

module.exports = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
