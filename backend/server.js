const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbContext = require("./config/database");
const projects = require("./routes/project");
const bugs = require("./routes/bug");
const assignments = require("./routes/assignment");
const teams = require("./routes/team");
const users = require("./routes/user");
const auth = require("./routes/auth");

app.use(express.json());
dotenv.config({ path: "./config/config.env" });
dbContext();

app.use("/api/v1/projects", projects);
app.use("/api/v1/bugs", bugs);
app.use("/api/v1/assignments", assignments);
app.use("/api/v1/teams", teams);
app.use("/api/v1/users", users);
app.use("/api/v1/register", auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
