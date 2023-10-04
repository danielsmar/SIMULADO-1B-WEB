import { PrismaClient, Secretaria } from "@prisma/client";

const prisma = new PrismaClient();

class SecretariaService {
  constructor() {}

  async novaSecretaria(data: Secretaria) {
    try {
      const novaSecretaria = await prisma.secretaria.create({ data });
      return novaSecretaria;
    } catch (error) {
      console.log(error);
    }
  }

  async removerSecretaria(id: number) {
    try {
      const removerSecretaria = await prisma.secretaria.delete({
        where: { id },
      });
      return "PSecretaria removida";
    } catch (error) {
      console.log(error);
    }
  }

  async listarSecretarias() {
    try {
      const secretaria = await prisma.secretaria.findMany();
      return secretaria;
    } catch (error) {
      console.log(error);
    }
  }

  async listarUnicSecretaria(id: number) {
    try {
      const secretaria = await prisma.secretaria.findUnique({ where: { id } });
      return secretaria;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarSecretaria(id: number, dadosAtualizados: Partial<Secretaria>) {
    try {
      const atualizarSecretaria = await prisma.secretaria.update({
        where: { id },
        data: dadosAtualizados,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SecretariaService();
