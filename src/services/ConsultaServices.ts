import { PrismaClient, Consulta } from "@prisma/client";

const prisma = new PrismaClient();

class ConsultaService {
  constructor() {}

  async novaConsulta(
    nomePaciente: string,
    nomeDentista: string,
    pacienteId: number,
    secretariaId: number
  ) {
    try {
      const novaConsulta = await prisma.consulta.create({
        data: {
          data: new Date(),
          nomePaciente,
          nomeDentista,
          pacienteId,
          secretariaId,
        },
      });
      return novaConsulta;
    } catch (error) {
      console.log(error);
    }
  }

  async removerConsulta(id: number) {
    try {
      const removerConsulta = await prisma.consulta.delete({
        where: { id },
      });
      return "Consulta removida";
    } catch (error) {
      console.log(error);
    }
  }

  async listarConsultas() {
    try {
      const consultas = await prisma.consulta.findMany();
      return consultas;
    } catch (error) {
      console.log(error);
    }
  }

  async listarUnicConsulta(id: number) {
    try {
      const consulta = await prisma.consulta.findUnique({ where: { id } });
      return consulta;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarConsulta(id: number, dadosAtualizados: Partial<Consulta>) {
    try {
      const atualizarConsulta = await prisma.consulta.update({
        where: { id },
        data: dadosAtualizados,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ConsultaService();
