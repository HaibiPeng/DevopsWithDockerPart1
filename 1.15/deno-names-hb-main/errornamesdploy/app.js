import { decode } from "https://deno.land/std@0.65.0/encoding/utf8.ts";
import { serve } from "https://deno.land/std@0.65.0/http/server.ts";
import { renderFile } from 'https://deno.land/x/dejs@0.8.0/mod.ts';
import { Client } from "https://deno.land/x/postgres@v0.4.5/mod.ts";

const DATABASE_URL = Deno.env.toObject().DATABASE_URL;
const client = new Client(DATABASE_URL);
let port = 7777;
if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  port = Number(lastArgument);
}

const server = serve({ port: port });

const executeQuery = async(query, ...args) => {
    try {
        await client.connect();
        return await client.query(query, ...args);
    } catch (e) {
        console.log(e);
    } finally {
        await client.end();
    }
}

const getNames = async() => {
    const result = await executeQuery("SELECT id, name FROM names;");
    if (result) {
        return result.rowsOfObjects();
    }

    return [];
}

const addName = async(request) => {
    const body = decode(await Deno.readAll(request.body));
    const params = new URLSearchParams(body);

    const name = params.get('name');

    await executeQuery("INSERT INTO names (name) VALUES ($1);", name);
}

const deleteName = async(request) => {
    console.log(`Delete name based on request url ${request.url}`);
    const parts = request.url.split('/');
    const id = parts[2];

    await executeQuery("DELETE FROM names WHERE id = $1;", id);
};

const redirectToNames = (request) => {
    request.respond({
        status: 303,
        headers: new Headers({
            'Location': '/names',
        })
    });
};

const handleGetNames = async(request) => {
    const data = {
        names: await getNames()
    };
    request.respond({ body: await renderFile('index.ejs', data) });
};

const handlePostNames = async(request) => {
    await addName(request);
    redirectToNames(request);
}

const handleDeleteNames = async(request) => {
    await deleteName(request);
    redirectToNames(request);
}

for await (const request of server) {
    if (request.method === 'GET' && request.url === '/names') {
        await handleGetNames(request);
    } else if (request.method === 'POST' && request.url === '/names') {
        await handlePostNames(request);
    } else if (request.method === 'POST' && request.url.includes('delete')) {
        await handleDeleteNames(request);
    } else {
        redirectToNames(request);
    }
}
