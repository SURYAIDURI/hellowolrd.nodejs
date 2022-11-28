const http = require('http');

const server = http.createServer((surya, teja) => {
    console.log(surya);
});

server.listen(4000);