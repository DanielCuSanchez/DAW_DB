const containerCharacters = document.getElementById("characters-container");
const BASE_URL = "https://rickandmortyapi.com/api/character";

async function chargeAllCharacters() {
  const response = await fetch(BASE_URL);

  const { results } = await response.json();

  containerCharacters.innerHTML = "";
  results.map((character) => {
    containerCharacters.innerHTML += characterTemplate(character, "card");
  });

  const detailButtons = document.querySelectorAll("#detailButton");
  console.log(detailButtons);

  for (button of detailButtons) {
    button.addEventListener("click", detailRequest);
  }
}

function characterTemplate(character, type) {
  const { id, image, name, status, species, gender, location } = character;

  if (type === "card") {
    const templateCard = `
    <div class="col s12 m4">
      <div class="card center">
        <div class="card-title ">
          ${name}
        </div>
        <div class="card-content">
          <p>Status: ${status}</p>
        </div>
        <div class="card-action">
          <button id="detailButton" name="${id}" class="waves-effect waves-light btn-large">Detalle</button>
        </div>
      </div>
    </div>
    `;
    return templateCard;
  } else if (type === "detail") {
    const templateHorizontal = `
    <div class="col s12">
      <h2>${name}</h2>
      <div class="card horizontal">
        <div class="card-image">
         <img src="${image}">
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>Species: ${species}</p>
            <p>Gender: ${gender}</p>
            <p>Location: ${location.name}</p>
          </div>
          <div class="card-action">
            <button id="backButton" class="waves-effect waves-light btn-large">Regresar</button>
          </div>
        </div>
      </div>
    </div>
    `;
    return templateHorizontal;
  }
  return null;
}

async function detailRequest(e) {
  const idCharacter = e.srcElement.name;
  const response = await fetch(`${BASE_URL}/${idCharacter}`);
  const character = await response.json();
  containerCharacters.innerHTML = "";
  containerCharacters.innerHTML = characterTemplate(character, "detail");

  document
    .getElementById("backButton")
    .addEventListener("click", chargeAllCharacters);
}

window.onload = chargeAllCharacters;
