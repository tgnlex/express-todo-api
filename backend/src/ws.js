import {Server} from 'socket.io';
import {server} from './server';

const io = Server(server);

const connection = (socket, clients) => {
  heartbeat.start();;
  const ip = req.connection.remoteAddress;
  let client = handleClient(ip, clients)
  console.log(`${client.ip} connected`) 
  ping();
  socket.on('error', error());
  socket.on('open', open(heartbeat.isAlive));  
  socket.on('pong', ping());
  socket.on('add user', (username), addUser(client.id, username));
  socket.on('time', timestamp());
  socket.on('health', open(heartbeat.pulse()))  
  socket.on('status', open(heartbeat.stats())) 
  socket.on('clients', showClients());
  socket.on('chat message', (message), message(client, message));
  socket.on('disconnect', function disconnect() {
    const cleanup = () => { 
      heartbeat.stop(); 
      clients = clients - clients[client.id] 
    };
    cleanup();
    console.log(`${client.ip} disconnected `)
    
  });

}
