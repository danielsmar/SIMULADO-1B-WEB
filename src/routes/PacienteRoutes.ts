import PacienteController from "../controller/PacienteController";
import { Router } from "express";

const PacienteRoute = Router();

PacienteRoute.get("/pacientes", PacienteController.listarPacientes);

PacienteRoute.get("/paciente/:id", PacienteController.listarPacienteID);

PacienteRoute.post("/paciente", PacienteController.novoPaciente);

PacienteRoute.patch("/paciente/:id", PacienteController.atualizarPaciente);

PacienteRoute.delete("/paciente/:id", PacienteController.removerPaciente);

export default PacienteRoute;
