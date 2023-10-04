import AgendaController from "../controller/AgendaController";
import { Router } from "express";

const AgendaRouter = Router();

AgendaRouter.get("/agendas", AgendaController.listarAgendas);

AgendaRouter.get("/agenda/:id", AgendaController.listarAgendaID);

AgendaRouter.post("/agenda", AgendaController.novaAgenda);

AgendaRouter.patch("/agenda/:id", AgendaController.atualizarAgenda);

AgendaRouter.delete("/agenda/:id", AgendaController.removerAgenda);

export default AgendaRouter;
