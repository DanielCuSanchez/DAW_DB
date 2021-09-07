const path = require("path");
const fs = require("fs");
const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const requestHandler = (req, res) => {
  console.log(req.url);
  //Reaccionar de acuerdo a la ruta
  if (req.url === "/arreglo") {
    res.setHeader("Content-Type", "text/html");
    res.write('<head><meta charset="UTF-8"></head>');
    res.write("<h1>¡Hola mundo!</h1>");
    res.end();
  } else if (req.url === "/menu") {
    //Mostrar la lista de platillos
    res.setHeader("Content-Type", "text/html");
    res.write('<head><meta charset="UTF-8"></head>');
    res.write("<h1>Menú</h1>");
    res.write("<ul>");
    for (let platillo of platillos) {
      res.write(
        "<li>" + platillo.nombre + ": " + platillo.descripcion + "</li>"
      );
    }
    res.write("</ul>");
    res.write('<a href="/menu/add">Agregar platillo</a>');
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hola mundo desde express");
  }
};

module.exports = { requestHandler, HOSTNAME, PORT };

//Una función que reciba un arreglo de números y devuelva su promedio.
//Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
//Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.
