export default class LoginUi {
  constructor(client) {
    this.createUi();
    this.client = client;
  }

  createUi = () => {
    this.loginBg = document.createElement("div");
    this.loginBg.id = "loginBg";
    let loginInput = document.createElement("input");
    loginInput.id = "loginInput";
    let loginSubmit = document.createElement("button");
    loginSubmit.id = "loginSubmit";
    loginSubmit.innerText = "Login";
    loginSubmit.addEventListener("click", () => {
      if (document.getElementById("loginInput").value) {
        this.client.emit("connectSubmit", { name: loginInput.value });
      } else {
        alert("set a username");
      }
    });
    this.loginBg.append(loginInput, loginSubmit);
    document.body.append(this.loginBg);
  };

  removeUi = () => {
    this.loginBg.remove();
  };
}
