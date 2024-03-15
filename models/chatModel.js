const { Schema, model } = require("mongoose");

const chatSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isGroupChat: {
      type: Boolean,
      default: true,
    },
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    room: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
  },
  { timestamps: true }
);

const Chat = model("Chat", chatSchema);

export default Chat