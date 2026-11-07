const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  //res.send("Hello from Render!");
  res.send("Hello from Render! Version 2 - deployed by Hadjer ");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});