const formNode = document.querySelector("#form");
const passwordNode = document.querySelector("#password");
const passwordRepeatNode = document.querySelector("#passwordrepeat");

//Expresión regular para match de password

const passwordMatch = new RegExp(
  "^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
);

const feedbackNode = document.querySelector("#feedback");

formNode.addEventListener("submit", validatorPassword);

function validatorPassword(e) {
  e.preventDefault();

  if (!(passwordNode.value.length === passwordRepeatNode.value.length)) {
    sendFeedBack("Revisa la longitud de tu contraseña en alguno de los campos");
    console.log("Longitud de campos");
  } else if (
    passwordNode.value.toString().localeCompare(passwordRepeatNode.value)
  ) {
    sendFeedBack("Tus contraseñas no coinciden");
    console.log("Coincidencia de campos");
  } else if (!passwordMatch.test(passwordNode.value)) {
    sendFeedBack(
      "Asegurate de contener al menos una letra minuscula, mayuscula y algun caracter especial en tu contraseña [!@#$%^&*]"
    );
    console.log("Expresion regular");
  } else if (passwordNode.value.length < 10) {
    sendFeedBack("La contraseña debe contener minimo 10 digitos", "warning");
  } else {
    sendFeedBack("La contraseña paso la validación 😀", "success");
  }
}

function sendFeedBack(msg, typeAlert = "danger") {
  feedbackNode.innerHTML = messageTemplate(msg, typeAlert);
  setTimeout(() => {
    feedbackNode.innerHTML = "";
  }, 3000);
}

function messageTemplate(msg, typeAlert = "danger") {
  return `
  <div class="alert alert-${typeAlert}" role="alert">
    ${msg}
  </div>
  `;
}
