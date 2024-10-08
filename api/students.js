// controllers/studentController.js

const studentService = require('../services/studentService');

const createView = async (req, res) => {
    res.render("students/create")
};
const createStudent = async (req, res) => {
    const { name, gender, dateOfBirth, phone, address, roomID } = req.body;

    try {
        const student = await studentService.createStudent(name, gender, dateOfBirth, phone, address, roomID);
        res.redirect("/students")
        res.status(201).json({ success: true, data: student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await studentService.getStudents();
        console.log(students);
        res.render("students/landing", { data: students})
        //res.json({ success: true, data: students });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const getStudentById = async (req, res) => {
    const studentId = parseInt(req.params.id);

    try {
        const student = await studentService.getStudentById(studentId);

        if (!student) {
            res.status(404).json({ success: false, error: 'Student not found' });
        } else {
            res.json({ success: true, data: student });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const updateStudent = async (req, res) => {
    const studentId = parseInt(req.params.id);
    const { name, gender, dateOfBirth, phone, address, roomID } = req.body;

    try {
        const student = await studentService.updateStudent(studentId, name, gender, dateOfBirth, phone, address, roomID);

        if (!student) {
            res.status(404).json({ success: false, error: 'Student not found' });
        } else {
            res.json({ success: true, data: student });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const deleteStudent = async (req, res) => {
    const studentId = parseInt(req.params.id);

    try {
        const student = await studentService.deleteStudent(studentId);

        if (!student) {
            res.status(404).json({ success: false, error: 'Student not found' });
        } else {
            res.json({ success: true, data: student });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = {
    createView,
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
