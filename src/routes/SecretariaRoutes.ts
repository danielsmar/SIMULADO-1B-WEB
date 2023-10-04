import SecretariaController from "../controller/SecretariaController";
import { Router } from "express";

const SecretariaRoute = Router();

SecretariaRoute.get("/secretarias", SecretariaController.listarSecretarias);

SecretariaRoute.get("/secretaria/:id", SecretariaController.listarSecretariaID);

SecretariaRoute.post("/secretaria", SecretariaController.novaSecretaria);

SecretariaRoute.patch(
  "/secretaria/:id",
  SecretariaController.atualizarSecretaria
);

SecretariaRoute.delete(
  "/secretaria/:id",
  SecretariaController.removerSecretaria
);

export default SecretariaRoute;
