const express = require("express");
const app = express();
const PORT = 4003;

app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
