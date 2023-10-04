import { PrismaClient, Agenda } from "@prisma/client";

const prisma = new PrismaClient();

class AgendaService {
  constructor() {}

  async novaAgenda(nomePaciente: string, data: Date) {
    try {
      const novaAgenda = await prisma.agenda.create({
        data: {
          data,
          nomePaciente,
        },
      });
      return novaAgenda;
    } catch (error) {
      console.log(error);
    }
  }

  async removerAgenda(id: number) {
    try {
      const removerAgenda = await prisma.agenda.delete({ where: { id } });
      return "Agenda removida";
    } catch (error) {
      console.log(error);
    }
  }

  async listarAgendas() {
    try {
      const agendas = await prisma.agenda.findMany();
      return agendas;
    } catch (error) {
      console.log(error);
    }
  }

  async listarUnicAgenda(id: number) {
    try {
      const agenda = await prisma.agenda.findUnique({ where: { id } });
      return agenda;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarAgenda(id: number, dadosAtualizados: Partial<Agenda>) {
    try {
      const atualizarAgenda = await prisma.agenda.update({
        where: { id },
        data: dadosAtualizados,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AgendaService();
