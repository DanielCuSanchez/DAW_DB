const carsContainer = document.querySelector("#carsContainer");
const summaryContainer = document.querySelector("#summaryContainer");
const totalContainer = document.querySelector("#totalContainer");
let summaryState = [];
const dataCards = [
  {
    id: 1,
    modelo: "Mazda 2",
    precio: 249999,
    img: "./img/mazda2.png",
    stock: 3,
  },
  {
    id: 2,
    modelo: "Mazda 3 Sedan",
    precio: 349999,
    img: "./img/mazda3-sedan.jpg",
    stock: 2,
  },
  {
    id: 3,
    modelo: "Mazda 3 Hatchback",
    precio: 362068,
    img: "./img/mazda3-hatch.jpg",
    stock: 1,
  },
];

function templateCard(car) {
  return `
  <div class="card bg-light" >
    <img src="${car.img}" class="card-img-top" alt="${car.modelo}">
    <div class="card-body">
      <h5 class="card-title">${car.modelo}</h5>
      <p class="card-text">
        $${car.precio.toLocaleString("en-MX")}
        <span class="badge bg-success">
          Disponibles: ${car.stock}
        </span>
      </p>
      <button id="${
        car.id
      }" class="btn btn-dark btn-add-car">Agregar al carrito</button>
    </div>
  </div>
  `;
}

function renderCards() {
  carsContainer.innerHTML = "";
  carsContainer.innerHTML += dataCards.map((car) => {
    return templateCard(car);
  });
  const addButtons = document.querySelectorAll(".btn-add-car");
  for (const carButton of addButtons) {
    carButton.addEventListener("click", addButton);
  }
}

function addButton(e) {
  const idCar = e.srcElement.id;
  dataCards.map((car) => {
    if (car.id.toString() === idCar) {
      if (car.stock > 0) {
        car.stock = car.stock - 1;
        summaryState.push({
          ...car,
        });
      }
    }
  });
  renderCards();
  showSummary();
  paymentButton();
}

function deleteButton(e) {
  console.log("deleteButton", e);
  const idCar = e.srcElement.id;
  const carDeleted = summaryState.splice(idCar, 1)[0];
  dataCards.map((car) => {
    if (car.id === carDeleted.id) {
      car.stock = car.stock + 1;
    }
  });
  renderCards();
  showSummary();
  paymentButton();
}
function paymentButton(e) {
  const { quantity, subtotal, IVA, total } = calculateTotal(summaryState);

  totalContainer.innerHTML = "";

  totalContainer.innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">
      <b>Cantidad carros</b>: ${quantity}
    </li>
    <li class="list-group-item">
      <b>Subtotal</b>: $${subtotal.toLocaleString("en-MX")}
    </li>
    <li class="list-group-item">
      <b>IVA</b>: $${IVA.toLocaleString("en-MX")}
    </li>
    <li class="list-group-item">
      <b>Total a pagar</b>: $${total.toLocaleString("en-MX")}
    </li>
  </ul>
  `;

  if (summaryState.length !== 0) {
    totalContainer.innerHTML += `
    <button class="btn btn-primary btn-lg btn-payment mt-5">Proceder pago</button>
  `;
    document
      .querySelector(".btn-payment")
      .addEventListener("click", function (e) {
        alert("Pagar LOL");
      });
  }

  console.log("PaymentButton", e);
}

function calculateTotal(carArray) {
  const quantity = carArray.length;
  let subtotal = 0;
  carArray.forEach((car) => {
    subtotal += car.precio;
  });
  const IVA = subtotal * 0.16;
  const total = subtotal + IVA;
  return {
    quantity,
    subtotal,
    IVA,
    total,
  };
}

function showSummary() {
  summaryContainer.innerHTML = "";
  summaryContainer.innerHTML += summaryState.map((car, index) => {
    return templateCarSummary(car, index);
  });
  const deleteButtons = document.querySelectorAll(".btn-delete-car");
  for (const button of deleteButtons) {
    button.addEventListener("click", deleteButton);
  }
}

function templateCarSummary(car, index) {
  return `
  <div class="card bg-dark text-light">
    <div class="card-header">
      ${car.modelo}
    </div>
    
    <div class="card-body">
      <h5 class="card-title">$${car.precio.toLocaleString("en-MX")}</h5>
      <p class="card-text">Precio mas IVA</p>
      <button id="${index}" class="btn btn-danger btn-delete-car">Eliminar</button>
    </div>
  </div>
  `;
}

//Cargar data inicial
window.onload = renderCards;
