function noop() {
  return null;
}

function ack() {
  if (error) {
    console.error;
    return error;
  }
  else { return 'ACK' };
}




export {noop, ack}