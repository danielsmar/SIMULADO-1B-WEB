import ConsultaServices from "../services/ConsultaServices";
import { Request, Response } from "express";

class ConsultaController {
  constructor() {}

  async novaConsulta(req: Request, res: Response) {
    try {
      const novaConsulta = req.body;

      const consulta = await ConsultaServices.novaConsulta(
        novaConsulta.nomePaciente,
        novaConsulta.nomeDentista,
        novaConsulta.pacienteId,
        novaConsulta.secretariaId
      );

      return res.status(200).json({
        status: "ok",
        consulta: consulta,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao criar Consulta",
      });
    }
  }

  async removerConsulta(req: Request, res: Response) {
    try {
      const consultaId = req.params.id;
      const consultaIdNumber: number = parseInt(consultaId);

      const consultaRemovida = await ConsultaServices.removerConsulta(
        consultaIdNumber
      );
      return res.status(200).json({
        status: "ok",
        message: "Consulta removida com sucesso",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao deletar Consulta",
      });
    }
  }

  async listarConsultas(req: Request, res: Response) {
    try {
      const consultas = await ConsultaServices.listarConsultas();
      return res.status(200).json({
        status: "ok",
        consultas: consultas,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao buscar Consultas",
      });
    }
  }

  async listarConsultaID(req: Request, res: Response) {
    try {
      const consultaId = req.params.id;
      const consultaIdNumber: number = parseInt(consultaId);

      const consulta = await ConsultaServices.listarUnicConsulta(
        consultaIdNumber
      );
      return res.status(200).json({
        status: "ok",
        consulta: consulta,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao buscar consulta",
      });
    }
  }

  async atualizarConsulta(req: Request, res: Response) {
    try {
      const consultaId = req.params.id;
      const consultaIdNumber: number = parseInt(consultaId);
      const dadosAtualizados = req.body;

      const consultaAtualizado = await ConsultaServices.atualizarConsulta(
        consultaIdNumber,
        dadosAtualizados
      );
      return res.status(200).json({
        status: "ok",
        consulta: consultaAtualizado,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao atualizar os dados da consulta",
      });
    }
  }
}

export default new ConsultaController();
