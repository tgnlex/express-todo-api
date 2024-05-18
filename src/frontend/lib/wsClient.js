import WebSocket from 'ws';
function hearbeat() {
  clearTimeout(this.pingTimeout);
  this.pingTimeout = setTimeout(() => {
    this.terminate();
  }, 30000 + 1000);
}

const client = new WebSocket('wss://localhost:8000');

client.on('error', console.error)
client.on('open', heartbeat);
client.on('ping', heartbeat)
client.on('close', function clear() {
  clearTimeout(this.pingTimeout);
})