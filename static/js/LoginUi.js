export default class LoginUi {
  constructor(client) {
    this.createUi();
    this.client = client;
  }

  createUi = () => {
    this.loginBg = document.createElement("div");
    this.loginBg.id = "loginBg";
    const loginForm = document.createElement("form");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (document.getElementById("loginInput").value) {
        this.client.emit("connectSubmit", { name: loginInput.value });
      } else {
        alert("set a username");
      }
    });
    let loginInput = document.createElement("input");
    loginInput.id = "loginInput";
    let loginSubmit = document.createElement("input");
    loginSubmit.type = "submit";
    loginSubmit.id = "loginSubmit";
    loginSubmit.innerText = "Login";
    loginForm.append(loginInput, loginSubmit);
    this.loginBg.append(loginForm);
    document.body.append(this.loginBg);
  };

  removeUi = () => {
    this.loginBg.remove();
  };
}
