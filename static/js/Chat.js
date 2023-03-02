export default class Chat {
  constructor(client, name) {
    this.name = name;
    this.client = client;
    this.createChat();
  }

  createChat = () => {
    let background = document.createElement("div");
    background.id = "background";
    let header = document.createElement("div");
    header.id = "header";
    let headerText = document.createElement("h2");
    headerText.id = "headerText";
    headerText.innerText = `zalogowany: ${this.name}`;
    header.append(headerText);
    let chatWrapper = document.createElement("div");
    chatWrapper.id = "chatWrapper";
    let messageWrapper = document.createElement("div");
    messageWrapper.id = "messageWrapper";
    let messageInput = document.createElement("textarea");
    messageInput.id = "messageInput";
    let messageSend = document.createElement("button");
    messageSend.id = "messageSend";
    messageSend.innerText = "Send";
    messageWrapper.append(messageInput, messageSend);
    background.append(header, chatWrapper, messageWrapper);
    document.body.append(background);
  };

  selfWelcomeMessage = () => {
    let message = document.createElement("div");
    message.className = "selfWelcome";
    let messageText = document.createElement("p");
    messageText.className = "messageText";
    messageText.innerText = `wchodze na czat`;
    message.append(messageText);
    document.getElementById("chatWrapper").append(message);
  };

  othersWelcomeMessage = (name) => {
    let message = document.createElement("div");
    message.className = "otherWelcome";
    let messageText = document.createElement("p");
    messageText.className = "messageText";
    messageText.innerText = `${name} wchodzi na czat`;
    message.append(messageText);
    document.getElementById("chatWrapper").append(message);
  };

  disconnectMessage = (name) => {
    let message = document.createElement("div");
    message.className = "disconnect";
    let messageText = document.createElement("p");
    messageText.className = "messageText";
    messageText.innerText = `${name} wychodzi z czatu`;
    message.append(messageText);
    document.getElementById("chatWrapper").append(message);
  };
}
