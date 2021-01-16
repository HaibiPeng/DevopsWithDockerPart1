import { Application, Router } from "https://deno.land/x/oak@v6.3.2/mod.ts";

const app = new Application();
app.use(async(context, next) => {
  try {
    await next();
  } catch(e) {
    console.log(e);
  }
});
const router = new Router();

const hello = async({response}) => {
  response.body = 'Hello world!';
}

router.get('/', hello);
app.use(router.routes());

if (!Deno.env.get('TEST_ENVIRONMENT')) {
  app.listen({ port: 7777 });
}

export { app };