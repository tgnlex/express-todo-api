import WebSocket, {WebSocketServer} from 'ws';
import {createServer} from 'http';



server.listen(4000, () => {
  console.log('server running at http://localhost:3000');
});

export {server};