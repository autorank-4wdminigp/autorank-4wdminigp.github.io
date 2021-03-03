const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("."));

app.listen(port, () => {
    console.log(`Serving static files at http://localhost:${port}`);
});
