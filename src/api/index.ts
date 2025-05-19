import { app } from "../app";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: Request, res: Response) {
  await app.ready();
  app.server.emit("request", req, res);
}
