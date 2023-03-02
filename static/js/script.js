import LoginUi from "./LoginUi.js";

const client = io();

let login = new LoginUi(client);

client.on("connected", (data) => {
  login.removeUi();
  let chat = new Chat(data.name);
});

client.on("loginError", () => {
  alert("There is already a user with this name");
});
