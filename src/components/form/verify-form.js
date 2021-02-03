function createOtpInputElement() {
  const otp = document.createElement("input");
  otp.type = "password";
  otp.placeholder = "*";
  otp.className = "input";

  return otp;
}

import { verify } from "./form.stories";

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const text = document.createElement("p");
  text.innerText = "Please check your mobile number 071*****12!";

  const otpOne = createOtpInputElement();
  const otpTwo = createOtpInputElement();
  const otpThree = createOtpInputElement();
  const otpFour = createOtpInputElement();

  const otpContainer = document.createElement("div");
  otpContainer.className = "form-otp";
  otpContainer.append(otpOne, otpTwo, otpThree, otpFour);

  const button = document.createElement("button");
  button.innerText = "Next";
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
