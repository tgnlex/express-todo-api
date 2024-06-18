import { MessageForm } from './Message';
function ChatRoom () {
  return (
    <div id="chatroom">
      <div id="window">
        <ul id="messages"></ul>
      </div>
      <div id="settings"></div>
      <MessageForm />
    </div>
  )
}
export { ChatRoom }; 
