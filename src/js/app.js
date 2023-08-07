const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const formControl = document.querySelector(".newsletter__form-control");
const newsletter = document.querySelector(".newsletter");
const thanksSec = document.querySelector(".thanks-message");
const sendedEmail = document.querySelector("#sended-email");
const dismissBtn = document.querySelector("#dismiss-button");
const paternEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  inputValidation();
  showUserEmail();
});

dismissBtn.addEventListener("click", () => {
  newsletter.classList.remove("remove");
  thanksSec.classList.remove("show");
});

function inputValidation() {
  const emailValue = emailInput.value.trim();
  const testPatern = paternEmail.test(emailValue);

  if (emailValue === "" || testPatern === false) {
    formControl.classList.add("error");
  } else {
    formControl.classList.remove("error");
    newsletter.classList.add("remove");
    thanksSec.classList.add("show");
  }

  console.log(testPatern);
}

function showUserEmail() {
  const emailValue = emailInput.value;
  sendedEmail.textContent = `${emailValue}`;
}

function appearsThanksSec() {
  newsletter.classList.add("remove");
  thanksSec.classList.add("show");
}
