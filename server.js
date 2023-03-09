//dependinces
//express
const express = require("express");

//app/port
const PORT = process.env.PORT || 4000;
const app = express();

app.get("/", (req, res) => res.send("the srever works"));

// middles
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
