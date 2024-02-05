const form = document.getElementById("form");
const errorMessage = document.querySelector(".alert-error");
const modal = document.querySelector("[data-modal]");

form.addEventListener("submit", formSend);

function formSend(e) {
  e.preventDefault();

  let error = formValidate(form);

  if (error === 0) {
    errorMessage.innerHTML = "";
    alert("Thank you, we will call you back =)");
    form.reset();
  } else {
    errorMessage.style.display = "";
    errorMessage.innerHTML = `Please fill in all the fields.`;
  }
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll(".req");

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);

    if (input.classList.contains("tel")) {
      if (!telTest(input)) {
        formAddError(input);
        error++;
      }
    } else if (
      input.getAttribute("type") === "checkbox" &&
      input.checked === false
    ) {
      formAddError(input);
      error++;
    } else {
      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
  }
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add("error");
  input.classList.add("error");
}

function formRemoveError(input) {
  input.parentElement.classList.remove("error");
  input.classList.remove("error");
}

function telTest(input) {
  return /[0-9]/.test(input.value);
}
