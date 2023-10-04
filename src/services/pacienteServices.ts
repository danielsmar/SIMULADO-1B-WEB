import { PrismaClient, Paciente } from "@prisma/client";

const prisma = new PrismaClient();

class PacienteService {
  constructor() {}

  async novoPaciente(data: Paciente) {
    try {
      console.log("User Serice ok?");
      const novoPaciente = await prisma.paciente.create({ data });
      return novoPaciente;
    } catch (error) {
      console.log(error);
    }
  }

  async removerPaciente(id: number) {
    try {
      const removerPaciente = await prisma.paciente.delete({ where: { id } });
      return "Paciente removido";
    } catch (error) {
      console.log(error);
    }
  }

  async listarPacientes() {
    try {
      const pacientes = await prisma.paciente.findMany();
      return pacientes;
    } catch (error) {
      console.log(error);
    }
  }

  async listarUnicPaciente(id: number) {
    try {
      const paciente = await prisma.paciente.findUnique({ where: { id } });
      return paciente;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarPaciente(id: number, dadosAtualizados: Partial<Paciente>) {
    try {
      const atualizarPaciente = await prisma.paciente.update({
        where: { id },
        data: dadosAtualizados,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PacienteService();
