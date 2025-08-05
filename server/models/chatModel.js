class ChatMessage {
  constructor(id, fromUserId, toUserId, message) {
    this.id = id;
    this.fromUserId = fromUserId;
    this.toUserId = toUserId;
    this.message = message;
    this.timestamp = new Date().toISOString();
  }
}

module.exports = ChatMessage;
