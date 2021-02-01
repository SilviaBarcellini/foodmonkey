import { doc } from "prettier";

export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const text = document.write("p");
  text.paragraph = "please click here";

  const button = document.createElement("button");
  button.innerText = "Register!";

  function register() {
    alert("Successfully registered!");
  }

  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.InnerText = "Reset Password";

  form.append(title, button);

  return form;
}

/* 
        <form class="form">
          <h2>Reset Password</h2>
          <p>Please enter your email to receive a link to create a new password via email</p>
          <input placeholder="email" />
          <input type="submit" />
        </form>
      `;
      */
