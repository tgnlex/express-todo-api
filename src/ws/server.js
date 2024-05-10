import WebSocket, {WebSocketServer} from 'ws';
import express from 'express';
import http, {createServer} from 'http';
import {ping, open, incoming, close, connection} from '../sockets.js';
// Express App.
const app = express()
// Middleware
app.use(express.json)
app.use(express.urlencoded)
// Create Server + Socket
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
export const ws = new WebSocket
export const clients = [];
const messages = [];
wss.on('connect', connection());

ws.on('open',  open());
ws.on('message', incoming());
ws.on('close', close());


const interval = setInterval(ping(), 30000);