import AgendaServices from "../services/AgendaServices";
import { Request, Response } from "express";

class AgendaController {
  constructor() {}

  async novaAgenda(req: Request, res: Response) {
    try {
      const novaAgenda = req.body;

      const agenda = await AgendaServices.novaAgenda(
        novaAgenda.nomePaciente,
        new Date()
      );

      return res.status(200).json({
        status: "ok",
        agenda: agenda,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao criar Consulta",
      });
    }
  }

  async removerAgenda(req: Request, res: Response) {
    try {
      const agendaId = req.params.id;
      const agendaIdNumber: number = parseInt(agendaId);

      const agendaRemovida = await AgendaServices.removerAgenda(agendaIdNumber);
      return res.status(200).json({
        status: "ok",
        message: "Agenda removida com sucesso",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao deletar Agenda",
      });
    }
  }

  async listarAgendas(req: Request, res: Response) {
    try {
      const agendas = await AgendaServices.listarAgendas();
      return res.status(200).json({
        status: "ok",
        agendas: agendas,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao buscar Agendas",
      });
    }
  }

  async listarAgendaID(req: Request, res: Response) {
    try {
      const agendaId = req.params.id;
      const agendaIdNumber: number = parseInt(agendaId);

      const agenda = await AgendaServices.listarUnicAgenda(agendaIdNumber);
      return res.status(200).json({
        status: "ok",
        agenda: agenda,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao buscar agenda",
      });
    }
  }

  async atualizarAgenda(req: Request, res: Response) {
    try {
      const agendaId = req.params.id;
      const agendaIdNumber: number = parseInt(agendaId);
      const dadosAtualizados = req.body;

      const agendaAtualizado = await AgendaServices.atualizarAgenda(
        agendaIdNumber,
        dadosAtualizados
      );
      return res.status(200).json({
        status: "ok",
        agenda: agendaAtualizado,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao atualizar os dados da agenda",
      });
    }
  }
}
export default new AgendaController();
