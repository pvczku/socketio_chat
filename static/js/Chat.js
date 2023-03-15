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
    let chatForm = document.createElement("form");
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (messageInput.value) {
        this.client.emit("sendMessage", {
          name: this.name,
          message: messageInput.value,
        });
        this.selfMessageSend(messageInput.value);
        messageInput.value = "";
      } else {
        alert("message cannot be empty");
      }
    });
    let messageWrapper = document.createElement("div");
    messageWrapper.id = "messageWrapper";
    let messageInput = document.createElement("input");
    messageInput.id = "messageInput";
    let messageSend = document.createElement("button");
    messageSend.id = "messageSend";
    messageSend.innerText = "Send";
    // messageSend.addEventListener("click", () => {
    //   if (messageInput.value) {
    //     this.client.emit("sendMessage", {
    //       name: this.name,
    //       message: messageInput.value,
    //     });
    //     this.selfMessageSend(messageInput.value);
    //     messageInput.value = "";
    //   } else {
    //     alert("message cannot be empty");
    //   }
    // });
    messageWrapper.append(messageInput, messageSend);
    chatForm.append(messageWrapper);
    background.append(header, chatWrapper, chatForm);
    document.body.append(background);
  };

  selfWelcomeMessage = () => {
    let message = document.createElement("div");
    message.className = "message selfWelcome";
    let messageText = document.createElement("p");
    messageText.className = "messageText";
    messageText.innerText = `wchodze na czat | ${this.getTime()}`;
    message.append(messageText);
    document.getElementById("chatWrapper").append(message);
    document.getElementById("chatWrapper").scrollTop =
      document.getElementById("chatWrapper").scrollHeight;
  };

  othersWelcomeMessage = (name) => {
    let message = document.createElement("div");
    message.className = "message otherWelcome";
    let messageText = document.createElement("p");
    messageText.className = "messageText";
    messageText.innerText = `${name} wchodzi na czat | ${this.getTime()}`;
    message.append(messageText);
    document.getElementById("chatWrapper").append(message);
    document.getElementById("chatWrapper").scrollTop =
      document.getElementById("chatWrapper").scrollHeight;
  };

  disconnectMessage = (name) => {
    let message = document.createElement("div");
    message.className = "message disconnect";
    let messageText = document.createElement("p");
    messageText.className = "messageText";
    messageText.innerText = `${name} wychodzi z czatu | ${this.getTime()}`;
    message.append(messageText);
    document.getElementById("chatWrapper").append(message);
    document.getElementById("chatWrapper").scrollTop =
      document.getElementById("chatWrapper").scrollHeight;
  };

  selfMessageSend = (messageValue) => {
    let message = document.createElement("div");
    message.className = "message othersSend";
    let messageText = document.createElement("p");
    messageText.className = "messageText";
    messageText.innerText = `me: ${messageValue} | ${this.getTime()}`;
    message.append(messageText);
    document.getElementById("chatWrapper").append(message);
    document.getElementById("chatWrapper").scrollTop =
      document.getElementById("chatWrapper").scrollHeight;
  };

  othersMessageSend = (name, messageValue) => {
    let message = document.createElement("div");
    message.className = "message selfSend";
    let messageText = document.createElement("p");
    messageText.className = "messageText";
    messageText.innerText = `${name}: ${messageValue} | ${this.getTime()}`;
    message.append(messageText);
    document.getElementById("chatWrapper").append(message);
    document.getElementById("chatWrapper").scrollTop =
      document.getElementById("chatWrapper").scrollHeight;
  };

  getTime = () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };
}
