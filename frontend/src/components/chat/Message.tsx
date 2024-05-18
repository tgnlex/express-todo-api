function MessageForm () {
  return (
    <form id="message-form">
      <input id="message" type="text" name="chat_message" />
      <button id="submit" type="submit">Send</button>
    </form>
  )
}

export { MessageForm };