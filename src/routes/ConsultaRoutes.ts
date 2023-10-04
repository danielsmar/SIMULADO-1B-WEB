import ConsultaController from "../controller/ConsultaController";
import { Router } from "express";

const ConsultaRoute = Router();

ConsultaRoute.get("/consultas", ConsultaController.listarConsultas);

ConsultaRoute.get("/consulta/:id", ConsultaController.listarConsultaID);

ConsultaRoute.post("/consulta", ConsultaController.novaConsulta);

ConsultaRoute.patch("/consulta/:id", ConsultaController.atualizarConsulta);

ConsultaRoute.delete("/consulta/:id", ConsultaController.removerConsulta);

export default ConsultaRoute;
