
const expenditureService = require("../services/expenditureService");

const createView = async (req, res) => {
    res.render("expenditures/create")
}

const createExpenditure = async (req, res) => {
    const { reason, amount, category } = req.body;

    try {
        const expenditure = await expenditureService.createExpenditure(reason, amount, category);
        res.redirect("/expenditures")
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}
const getexpenditure = async (req, res) => {
    try {
        const expenditure = await expenditureService.getAllExpenditures();
        res.render("expenditures/landing", { data: expenditure})
        //res.json({ success: true, data: expenditure });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const getExpenditureById = async (req, res) => {
    const expenditureId = parseInt(req.params.id);

    try {
        const expenditure = await expenditureService.getExpenditureById(expenditureId);

        if (!expenditure) {
            res.status(404).json({ success: false, error: 'expenditure not found' });
        } else {
            res.json({ success: true, data: expenditure });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const updateExpenditure = async (req, res) => {
    const expenditureId = parseInt(req.params.id);
    const { reason, amount, category  } = req.body;
    amount = parseInt(amount, 10)

    const updateData = {
        reason: reason,
        amount: amount,
        category: category
    }

    try {
        const expenditure = await expenditureService.updateExpenditure(expenditureId, name, gender, dateOfBirth, phone, address, roomID);

        if (!expenditure) {
            res.status(404).json({ success: false, error: 'expenditure not found' });
        } else {
            res.json({ success: true, data: expenditure });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const deleteExpenditure = async (req, res) => {
    const expenditureId = parseInt(req.params.id);

    try {
        const expenditure = await expenditureService.deleteExpenditure(expenditureId);

        if (!expenditure) {
            res.status(404).json({ success: false, error: 'expenditure not found' });
        } else {
            res.json({ success: true, data: expenditure });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = {
    createExpenditure,
    createView,
    getExpenditureById,
    getexpenditure,
    deleteExpenditure,
    updateExpenditure
}