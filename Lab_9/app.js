const path = require("path");
const fs = require("fs");
const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const arrayValues = [8, 8, 8, 5, 5, 7, 10, 10].sort((a, b) => a - b);
const requestHandler = (req, res) => {
  //console.log(req);

  //Una funci贸n que reciba un arreglo de n煤meros y devuelva su promedio.
  if (req.url === "/" && req.method === "POST") {
    req.on("data", (data) => {
      fs.writeFileSync("string.txt", data);
      console.log("Archivo escrito 馃榾");
      res.setHeader("Content-Type", "text/html");
      res.write('<head><meta charset="UTF-8"></head>');
      res.write(`<h3>Escribiste un archivo txt</h3>`);
      res.end();
    });
  } else if (req.url === "/" && req.method === "GET") {
    //Una funci贸n que reciba un string y escriba el string en un archivo de texto. Ap贸yate del m贸dulo fs.
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<head><meta charset="UTF-8"></head>');
    res.write(`<h3>Average: ${calculateAverage(arrayValues)}</h3>`);

    res.write('<form action="/" method="POST">');
    res.write('<label for="nombre">Escribe un nombre: </label>');
    res.write(
      '<input type="text" id="nombre" name="nombre" placeholder="string" required>'
    );
    res.write('<input type="submit" id="enviar" name="enviar" value="Enviar">');
    res.write("</form>");
    res.end();
  } else if (req.url === "/reto" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<head><meta charset="UTF-8"></head>');
    res.write(`<h2>Table</h2>`);
    res.write(`<ul>`);
    res.write(`${printMathTable(10)}`);
    res.write(`</ul>`);
    res.end();
  }
  //Escoge alg煤n problema que hayas implementado en otro lenguaje de programaci贸n, y dale una soluci贸n en js que se ejecute sobre node.
};

function calculateAverage(array) {
  let average = 0;
  for (const element of array) {
    average += element;
  }
  return average;
}

function printMathTable(number) {
  let table = "";

  for (let i = 1; i <= number; i++) {
    table += `<li>${number} x ${i} = ${i * number} </li>`;
  }

  return table;
}

module.exports = { requestHandler, HOSTNAME, PORT };
