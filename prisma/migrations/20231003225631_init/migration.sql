-- CreateTable
CREATE TABLE "Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomePaciente" TEXT NOT NULL,
    "senha" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Secretaria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "RG" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePaciente" TEXT NOT NULL,
    "nomeDentista" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "secretariaId" INTEGER NOT NULL,
    CONSTRAINT "Consulta_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consulta_secretariaId_fkey" FOREIGN KEY ("secretariaId") REFERENCES "Secretaria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePaciente" TEXT NOT NULL,
    CONSTRAINT "Agenda_nomePaciente_fkey" FOREIGN KEY ("nomePaciente") REFERENCES "Consulta" ("nomePaciente") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_nomePaciente_key" ON "Consulta"("nomePaciente");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_pacienteId_key" ON "Consulta"("pacienteId");

-- CreateIndex
CREATE UNIQUE INDEX "Consulta_secretariaId_key" ON "Consulta"("secretariaId");

-- CreateIndex
CREATE UNIQUE INDEX "Agenda_nomePaciente_key" ON "Agenda"("nomePaciente");
