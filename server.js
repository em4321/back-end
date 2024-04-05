const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.json());

app.use("/", require("./routes/simpsons"));
app.use("/demo", require("./routes/demos"));

const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
