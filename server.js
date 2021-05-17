const express = require('express');
const next = require('next');
const http = require('http');

const { json } = express;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    server.use(json({ limit: '2mb' }));

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    const  httpServer = http.createServer(server);
    const PORT = process.env.PORT || 3000;
    await httpServer.listen(PORT);
    console.log(`Ready on localhost:${PORT}`)
} )();