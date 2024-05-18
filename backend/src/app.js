import express from 'express';
import {error, open, health, ping, timestamp, message} from './sockets.js';
// Express App.
const app = express()
const server = createServer(app);


const messages = [];
// Middleware
app.use(express.json)
app.use(express.urlencoded)