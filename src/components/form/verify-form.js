import { verify } from "./form.stories";

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const text = document.createElement("p");
  text.innerText = "Please check your mobile number 071*****12!";

  const otpOne = document.createElement("input");
  otpOne.type = "password";
  otpOne.placeholder = "*";
  otpOne.className = "input";

  const otpTwo = document.createElement("input");
  otpTwo.type = "password";
  otpTwo.placeholder = "*";
  otpTwo.className = "input";

  const otpThree = document.createElement("input");
  otpThree.type = "password";
  otpThree.placeholder = "*";
  otpThree.className = "input";

  const otpFour = document.createElement("input");
  otpFour.type = "password";
  otpFour.placeholder = "*";
  otpFour.className = "input";

  const otpContainer = document.createElement("div");
  otpContainer.className = "form-otp";
  otpContainer.append(otpOne, otpTwo, otpThree, otpFour);

  const button = document.createElement("button");
  button.innerText = "Confirm";
  button.className = "btn";

  const hint = document.createElement("p");
  hint.innerText = "Wrong mobile number?";
  hint.className = "form-hint";

  const resendLink = document.createElement("a");
  resendLink.innerText = "Click here!";
  resendLink.href = "#";
  resendLink.className = "resend-link";

  hint.append(resendLink);

  /*  function register() {
    alert("Successfully registered!");
  }

  button.addEventListener("click", verify);
 */

  form.append(title, text, otpContainer, button, hint);

  return form;
}
