const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/profile", require("./routes/profile"));
// app.use("/education", require("./routes/education"));
app.use("/skills", require("./routes/skills"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

