import {error, open, health, ping, timestamp, message} from './ws/sockets.js';
import {showClients, addUser} from './ws/clients.js';

const connection = (socket, clients) => {
  heartbeat.start();
  io.emit('open', open());
  const ip = req.connection.remoteAddress;
  let client = handleClient(ip, clients)
  console.log(`${client.ip} connected`) 
  ping();
  socket.on('error', error());
  socket.on('open', open(heartbeat.pulse()));  
  socket.on('pong', ping());
  socket.on('add user', (username), addUser(client.id, username));
  socket.on('time', timestamp());
  socket.on('health', open(heartbeat.pulse()))  
  socket.on('status', open(hearbeat.stats())) 
  socket.on('clients', showClients());
  socket.on('chat message', (message), message(client, message));
  socket.on('disconnect', function disconnect() {
    const cleanup = () => { heartbeat.stop() }
    cleabb
    console.log(`${client.ip} disconnected `)
  });
}

export {connection};