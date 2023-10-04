import express from "express";

import * as dotenv from "dotenv";
import PacienteRoute from "./routes/PacienteRoutes";
import SecretariaRoute from "./routes/SecretariaRoutes";
import ConsultaRoute from "./routes/ConsultaRoutes";
import AgendaRouter from "./routes/AgendaRoutes";

dotenv.config({ path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env" });

const app = express();

app.use(express.json());

app.use("/api", PacienteRoute);
app.use("/api", SecretariaRoute);
app.use("/api", ConsultaRoute);
app.use("/api", AgendaRouter);

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} else {
  console.log("ZE DA MANGA");
}
