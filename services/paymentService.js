// services/paymentService.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createPayment = async (mode, referenceNumber, studentId, payeDay, receiptNumber) => {
    const payment = await prisma.payment.create({
        data: {
            mode,
            referenceNumber,
            studentId,
            payeDay,
            receiptNumber,
        },
    });

    return payment;
};

const getPayments = async () => {
    const payments = await prisma.payment.findMany();
    return payments;
};

const getPaymentById = async (paymentId) => {
    const payment = await prisma.payment.findUnique({
        where: {
            id: paymentId,
        },
    });

    return payment;
};

const updatePayment = async (paymentId, mode, referenceNumber, studentId, payeDay, receiptNumber) => {
    const payment = await prisma.payment.update({
        where: {
            id: paymentId,
        },
        data: {
            mode,
            referenceNumber,
            studentId,
            payeDay,
            receiptNumber,
        },
    });

    return payment;
};

const deletePayment = async (paymentId) => {
    const payment = await prisma.payment.delete({
        where: {
            id: paymentId,
        },
    });

    return payment;
};

module.exports = {
    createPayment,
    getPayments,
    getPaymentById,
    updatePayment,
    deletePayment,
};
