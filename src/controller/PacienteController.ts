import pacienteServices from "../services/pacienteServices";
import { Request, Response } from "express";

class PacienteController {
  constructor() {}

  async novoPaciente(req: Request, res: Response) {
    try {
      const novoPaciente = req.body;

      const paciente = await pacienteServices.novoPaciente(novoPaciente);

      return res.status(200).json({
        status: "ok",
        paciente: paciente,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao criar o paciente",
      });
    }
  }

  async removerPaciente(req: Request, res: Response) {
    try {
      const pacienteId = req.params.id;
      const pacienteIdNumber: number = parseInt(pacienteId);

      const pacienteRemovido = await pacienteServices.removerPaciente(
        pacienteIdNumber
      );
      return res.status(200).json({
        status: "ok",
        message: "Paciente removido com sucesso",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao deletar o paciente",
      });
    }
  }

  async listarPacientes(req: Request, res: Response) {
    try {
      const pacientes = await pacienteServices.listarPacientes();
      return res.status(200).json({
        status: "ok",
        pacientes: pacientes,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao listar pacientes",
      });
    }
  }

  async listarPacienteID(req: Request, res: Response) {
    try {
      const pacienteId = req.params.id;
      const pacienteIdNumber: number = parseInt(pacienteId);

      const paciente = await pacienteServices.listarUnicPaciente(
        pacienteIdNumber
      );
      return res.status(200).json({
        status: "ok",
        pacientes: paciente,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao buscar paciente",
      });
    }
  }

  async atualizarPaciente(req: Request, res: Response) {
    try {
      const pacienteId = req.params.id;
      const pacienteIdNumber: number = parseInt(pacienteId);
      const dadosAtualizados = req.body;

      const pacienteAtualizado = await pacienteServices.atualizarPaciente(
        pacienteIdNumber,
        dadosAtualizados
      );
      return res.status(200).json({
        status: "ok",
        paciente: pacienteAtualizado,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao atualizar os dados do Paciente",
      });
    }
  }
}

export default new PacienteController();
