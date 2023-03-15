import LoginUi from "./LoginUi.js";
import Chat from "./Chat.js";

const client = io("/", {
  path: "/socketio"
});

let login = new LoginUi(client);
let chat;
client.on("connected", (data) => {
  login.removeUi();
  chat = new Chat(client, data.name);
  chat.selfWelcomeMessage();
  client.emit("chatJoin", { name: data.name });
});

client.on("someoneJoined", (data) => {
  chat.othersWelcomeMessage(data.name);
});

client.on("someoneDisconnected", (data) => {
  chat.disconnectMessage(data.name);
});

client.on("loginError", () => {
  alert("There is already a user with this name");
});
client.on("receiveMessage", (data) => {
  chat.othersMessageSend(data.name, data.message);
});
