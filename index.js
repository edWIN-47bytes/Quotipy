const getQuote = require("./getQuote");
const express = require("express");
const fs = require("fs/promises");
const app = express();
const port = 3000;

// API routes here
app.get("/api/quote", async (req, res) => {
  
    const randomquote = await getQuote();
    console.log(randomquote);
    res.json({
      quote: randomquote,
    });
  
});

// Normal routes here
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});



