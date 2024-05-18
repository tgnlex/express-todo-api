const heartbeat = {
  isAlive: {"alive": null},
  status: {"status": "offline"}, 
  start() {
    this.isAlive = {"alive":true};
    this.status =  {"status":"running"};
  },
  stop() {
    this.isAlive = {"alive":false},
    this.status =  {"status":"stopped"} 
  },
  pulse() {
    console.log(this.isAlive);
    return this.isAlive;
  }, 
  stat() {
    console.log(this.status);
    return this.status;
  }
}
export {heartbeat};