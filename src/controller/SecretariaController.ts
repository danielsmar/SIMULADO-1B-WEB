import secretariaServices from "../services/SecretariaServices";
import { Request, Response } from "express";

class SecretariaController {
  constructor() {}

  async novaSecretaria(req: Request, res: Response) {
    try {
      const novaSecretaria = req.body;

      const secretaria = await secretariaServices.novaSecretaria(
        novaSecretaria
      );

      return res.status(200).json({
        status: "ok",
        secretaria: secretaria,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao criar Secretaria",
      });
    }
  }

  async removerSecretaria(req: Request, res: Response) {
    try {
      const secretariaId = req.params.id;
      const secretariaIdNumber: number = parseInt(secretariaId);

      const secretariaRemovida = await secretariaServices.removerSecretaria(
        secretariaIdNumber
      );
      return res.status(200).json({
        status: "ok",
        message: "Secretaria removida com sucesso",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao deletar Secretaria",
      });
    }
  }

  async listarSecretarias(req: Request, res: Response) {
    try {
      const secretaria = await secretariaServices.listarSecretarias();
      return res.status(200).json({
        status: "ok",
        secretaria: secretaria,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao listar Secretarias",
      });
    }
  }

  async listarSecretariaID(req: Request, res: Response) {
    try {
      const secretariaId = req.params.id;
      const secretariaIdNumber: number = parseInt(secretariaId);

      const secretaria = await secretariaServices.listarUnicSecretaria(
        secretariaIdNumber
      );
      return res.status(200).json({
        status: "ok",
        secretaria: secretaria,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao buscar secretaria",
      });
    }
  }

  async atualizarSecretaria(req: Request, res: Response) {
    try {
      const secretariaId = req.params.id;
      const secretariaIdNumber: number = parseInt(secretariaId);
      const dadosAtualizados = req.body;

      const secretariaAtualizado = await secretariaServices.atualizarSecretaria(
        secretariaIdNumber,
        dadosAtualizados
      );
      return res.status(200).json({
        status: "ok",
        secretaria: secretariaAtualizado,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao atualizar os dados da Secretaria",
      });
    }
  }
}

export default new SecretariaController();
