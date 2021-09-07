const http = require("http");
const { requestHandler, PORT, HOSTNAME } = require("./app");

const server = http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, () => {
  console.log(`El servidor se está ejecutando en http://${HOSTNAME}:${PORT}/`);
});
