const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

const hostelService = require("./api/hostels");
const roomService = require("./api/rooms");
const paymentService = require("./api/payments");
const studentService = require("./api/students");
const Expenditureservice = require("./api/expenditures");

const home = (req, res) => {
  res.render("index");
};

app.get("/", home);

app.get("/hostels", hostelService.getHostels);
app.post("/hostels", hostelService.createHostel); // create a new host
app.get("/create/hostels", hostelService.createView); // render page
app.get("/hostels/:id", hostelService.getHostelById);
app.post("/hostels/:id", hostelService.updateHostel); // update
app.post("/hostels/delete/:id", hostelService.deleteHostel); // delete

//Students
app.get("/students", studentService.getStudents);
app.post("/students", studentService.createStudent); // create a new
app.get("/create/students", studentService.createView); // render page
app.get("/students/:id", studentService.getStudentById);
app.post("/students/:id", studentService.updateStudent); // update
app.post("/students/delete/:id", studentService.deleteStudent); // delete

//Payments
app.get("/payments", paymentService.getPayments);
app.post("/payments", paymentService.createPayment); // create a new
app.get("/create/payments", paymentService.createView); // render page
app.get("/payments/:id", paymentService.getPaymentById);
app.post("/payments/:id", paymentService.updatePayment); // update
app.post("/payments/delete/:id", paymentService.deletePayment); // delete

//Expenditures
app.get("/expenditures", Expenditureservice.getexpenditure);
app.post("/expenditures", Expenditureservice.createExpenditure); // create a new
app.get("/create/expenditures", Expenditureservice.createView); // render page
app.get("/expenditures/:id", Expenditureservice.getExpenditureById);
app.post("/expenditures/:id", Expenditureservice.updateExpenditure); // update
app.post("/expenditures/delete/:id", Expenditureservice.deleteExpenditure); // delete

app.listen(3000, () => {
  console.log("listening");
});
