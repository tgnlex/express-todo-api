const clients = {};

function showClients () {
  if (clients.len > 0) {
    console.log('Active Clients:')  
    console.log(clients);
  } else {
    console.log('No active clients...')
  } 
  io.emit('clients', clients);
}

function addUser(id, user) {
  const client = clients[id];
  if (client.user) return;
  if (client) {
    client.user = user;
    console.log(`Set client # ${id}'s nickname to ${user}`);
    io.emit('nickname', user);
  } else {
    let message = 'Client could not be found';
    console.log(message);
    io.emit('nickname', message);
  }
}

function handleClient(ip) {
  let id = uuidv4();
  let client = {id: id, ip: ip}
  clients.push(client);
} 
