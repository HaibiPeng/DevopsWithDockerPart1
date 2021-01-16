import { Application, Router } from "https://deno.land/x/oak@v6.3.2/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.4.5/mod.ts";

const client = new Client();
const app = new Application();
const router = new Router();

const hello = async({response}) => {
  await client.connect();
  const res = await client.query('SELECT * FROM users');
  await client.end();
  response.body = `Hello world -- total rows: ${res.rowCount}`;
}

router.get('/', hello);
app.use(router.routes());
app.listen({ port: 7777 });