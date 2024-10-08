// expenditureController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new expenditure record
async function createExpenditure(reason, amount, category) {
    amount = parseInt(amount, 10);
    createdBy = 0; // change me after adding authentication
    const expenditure = await prisma.expenditure.create({
      data: {
        reason,
        amount,
        category,
        createdBy
      },
    });
    return expenditure;
}

// Get all expenditures
async function getAllExpenditures() {
    const expenditures = await prisma.expenditure.findMany();
    return expenditures;
}

// Get a single expenditure by ID
async function getExpenditureById(id) {
    const expenditure = await prisma.expenditure.findUnique({
      where: { id },
    });
    return expenditure;
}

// Update an expenditure record
async function updateExpenditure(id, updates) {
    const updatedExpenditure = await prisma.expenditure.update({
      where: { id },
      data: updates,
    });
    return updatedExpenditure;
}

// Delete an expenditure record by ID
async function deleteExpenditure(id) {
    const deletedExpenditure = await prisma.expenditure.delete({
      where: { id },
  })
  return deletedExpenditure;

}

module.exports = {
  createExpenditure,
  getAllExpenditures,
  getExpenditureById,
  updateExpenditure,
  deleteExpenditure,
};
