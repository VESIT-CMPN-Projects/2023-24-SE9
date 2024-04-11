import express from "express";
import registerStudent from "../services/studentRegistrationService.js";

const studentRoute = express.Router();

studentRoute.use(express.json());

studentRoute.post("/register-student", registerStudent);      //to register student.

export default studentRoute;