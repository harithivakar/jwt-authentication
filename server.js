const http = require('http');

const app = require('./app.js');

const server = http.createServer(app);


server.listen(process.env.PORT || 3000, () => {
    console.log(`server running on port ${process.env.PORT}`);
})