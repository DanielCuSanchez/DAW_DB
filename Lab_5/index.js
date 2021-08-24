//Ejercicio_1: Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
function exercise1() {
  const input = prompt("Ingresa un numero: ");
  const number = parseInt(input);

  const exercise1Container = document.querySelector(".exercise1");
  exercise1Container.innerHTML = "";

  for (let i = 1; i < 4; i++) {
    exercise1Container.innerHTML += `<p>${number} ^ ${i} = ${Math.pow(
      number,
      i
    )}</p> <br>`;
  }
}

//Ejercicio_2:Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
function exercise2() {
  console.time();
  const initialTime = performance.now();
  const input = prompt("Ingresa un un resultado: ");
  const number = parseInt(input);
  const geneteredSumRandom =
    Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
  const exercise2Container = document.querySelector(".exercise2");
  const transcurredTime = (performance.now() - initialTime).toFixed(2);
  console.timeEnd();
  if (geneteredSumRandom === number) {
    exercise2Container.innerHTML = `<p>Le atinaste al resultado = ${geneteredSumRandom}</p> <br> <b>Tiempo transcurrido</b>: ${transcurredTime} ms`;
  } else {
    exercise2Container.innerHTML = `No le atinaste al resultado. Tu resultado = ${number}.<br> El resultado de la suma RANDOM: ${geneteredSumRandom} <br><b>Tiempo transcurrido</b>: ${transcurredTime} ms`;
  }
}

//Ejercicio_3 Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.

function exercise3() {
  const exercise3Container = document.querySelector(".exercise3");
  const arrayInput = [];
  for (let i = 1; i <= 5; i++) {
    const input = prompt(`Ingresa el número [${i}]`);
    const number = parseInt(input);
    arrayInput.push(number);
  }
  const totalGreaterCero = arrayInput.filter((element) => element > 0);
  const totalLessCero = arrayInput.filter((element) => element < 0);
  const totalEqualCero = arrayInput.filter((element) => element === 0);
  exercise3Container.innerHTML = `
  <p>
  <b>Total números positivos:</b> ${totalGreaterCero.length}
  <br>
  Arreglo: ${JSON.stringify(totalGreaterCero)}
  <br>
  <b>Total de números negativos:</b> ${totalLessCero.length}
  <br>
  Arreglo: ${JSON.stringify(totalLessCero)}
  <br>
  <b>Total de números 0:</b> ${totalEqualCero.length}
  <br>
  Arreglo: ${JSON.stringify(totalEqualCero)}
  </p>
  `;
}

//Ejercicio_4 Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

function exercise4() {
  const exercise4Container = document.querySelector(".exercise4");
  const dbStudents = [
    {
      id: 1,
      name: "Daniel",
      grades: [10, 9, 9, 10, 10],
    },
    {
      id: 2,
      name: "Juan",
      grades: [6, 9, 9, 10, 10],
    },
    {
      id: 3,
      name: "Eduardo",
      grades: [10, 10, 10, 10, 10],
    },
    {
      id: 4,
      name: "Lorena",
      grades: [9, 9, 9, 9, 9],
    },
    {
      id: 5,
      name: "Laura",
      grades: [8, 8, 8, 8, 8],
    },
  ];
  dbStudents.forEach((student) => {
    exercise4Container.innerHTML += `
    <p>
      <b>Estudiante:</b> ${student.name}
      <br>
      Promedio: ${calculateAverage(student.grades)}
    </p>
    `;
  });
}

function calculateAverage(studentArray) {
  let average = 0;
  let acum = 0;
  for (const grade of studentArray) {
    acum += grade;
  }
  average = acum / studentArray.length;
  return average;
}

//Ejercicio_5 Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.

function exercise5() {
  const exercise5Container = document.querySelector(".exercise5");
  const userInput = prompt("Ingresa un número: ");
  const reverseInput = userInput.split("").reverse().join("");

  exercise5Container.innerHTML = `El inverso del número ${userInput} es ${reverseInput}`;
}

//Ejercicio_6 Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, alguna problemática que hayas identificado en algún ámbito, un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM, entre otros). El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos. Muestra los resultados en el documento HTML.

async function exercise6() {
  const exercise6Container = document.querySelector(".exercise6");
  const userInput = prompt("Ingresa un número para buscar un pokemon: ");
  const URL = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
  const response = await fetch(URL);
  const pokemon = await response.json();
  exercise6Container.innerHTML = `
    <div class="text-center bg-light">
      <img src="${pokemon.sprites.back_default}" class="img-fluid"/>
      <p>${pokemon.name}</p>
    </div>
  `;
}
