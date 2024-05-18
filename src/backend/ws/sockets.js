import {noop, heartbeat} from './utils'

function error(err, socket) {
  console.error;
  try {
   socket.emit(`Error: ${err.message}`);
  } catch (err) {throw err}
}

function health(socket) {
  if (heartbeat.isAlive) {
    socket.emit('health', heartbeat)
  }
}

function open(data) {
  io.emit('open', data);
}
function ping(client) {
  let ip = client.ip;
  console.log(`Pinging client: ${ip}`)
  io.emit('ping', heartbeat.pulse());
};

const message = (socket, client, message) => {
  const user = client.user;
  if (user) {
    socket.emit('chat  message',`${user}: ${message}`)
  } else  {
    socket.emit('chat message', `${id}: ${message}`)
  }
}
function timestamp(socket) {
  socket.emit(`Timestamp: ${Date.Now()}`);
};


export {ping, message, timestamp, error, health, open }