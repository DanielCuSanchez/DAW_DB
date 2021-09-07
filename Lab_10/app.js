const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const requestHandler = (req, res) => {
  if (req.url === "/arreglo") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<head><meta charset="UTF-8"></head>');
    res.write("<h1>¡Hola esta es la ruta arreglo!</h1>");
    res.end();
  } else if (req.url === "/matriz") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<head><meta charset="UTF-8"></head>');
    res.write("<h1>¡Hola esta es la ruta matriz!</h1>");
    res.end();
  } else if (req.url === "/saludo") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<head><meta charset="UTF-8"></head>');
    res.write("<h1>¡Hola esta es la ruta saludo!</h1>");
    res.end();
  } else if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Ingresa alguna ruta: /arreglo, /matriz, /saludo");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Error 404");
  }
};

module.exports = { requestHandler, HOSTNAME, PORT };
