import { makeAxiosHttpClient } from "../../../infra/http/factories/axios-http-client-factory";
import { RemoteUser } from "./remote-user";

export const makeUser = () => (
  new RemoteUser(`coloca o endpoint aqui`, makeAxiosHttpClient())
)
