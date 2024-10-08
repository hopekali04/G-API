// controllers/paymentController.js

const paymentService = require('../services/paymentService');
const studentSVC = require('../services/studentService');

const createView = async (req, res) => {
    studentData = await studentSVC.getStudents()
    await res.render('payments/create', { data: studentData})
}

const createPayment = async (req, res) => {
    const { mode, referenceNumber, studentId, payeDay, receiptNumber } = req.body;

    try {
        const payment = await paymentService.createPayment(mode, referenceNumber, studentId, payeDay, receiptNumber);
        res.redirect("/payments")
        //res.status(201).json({ success: true, data: payment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const getPayments = async (req, res) => {
    try {
        const payments = await paymentService.getPayments();
        res.render("payments/landing", { data: payments})
        //res.json({ success: true, data: payments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const getPaymentById = async (req, res) => {
    const paymentId = parseInt(req.params.id);

    try {
        const payment = await paymentService.getPaymentById(paymentId);

        if (!payment) {
            res.status(404).json({ success: false, error: 'Payment not found' });
        } else {
            res.json({ success: true, data: payment });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const updatePayment = async (req, res) => {
    const paymentId = parseInt(req.params.id);
    const { mode, referenceNumber, studentId, payeDay, receiptNumber } = req.body;

    try {
        const payment = await paymentService.updatePayment(paymentId, mode, referenceNumber, studentId, payeDay, receiptNumber);

        if (!payment) {
            res.status(404).json({ success: false, error: 'Payment not found' });
        } else {
            res.json({ success: true, data: payment });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const deletePayment = async (req, res) => {
    const paymentId = parseInt(req.params.id);

    try {
        const payment = await paymentService.deletePayment(paymentId);

        if (!payment) {
            res.status(404).json({ success: false, error: 'Payment not found' });
        } else {
            res.json({ success: true, data: payment });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = {
    createPayment,
    createView,
    getPayments,
    getPaymentById,
    updatePayment,
    deletePayment,
};
