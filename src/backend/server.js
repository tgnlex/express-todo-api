import WebSocket, {WebSocketServer} from 'ws';
import express from 'express';
import {createServer} from 'http';
import {Server} from 'io';
import {connection} from './ws/sockets.js';
import {heartbeat, ack, noop, timeout} from './lib/utils.js';
import {handleClient} from './lib/handlers.js';

// Express App.
const app = express()
const server = createServer(app);
const io = Server(server);

const messages = [];
// Middleware
app.use(express.json)
app.use(express.urlencoded)

io.on('connect', connection());

server.listen(4000, () => {
  console.log('server running at http://localhost:3000');
});