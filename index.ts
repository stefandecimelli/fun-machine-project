import express from "express";
import home from "./api/home";
import execute from "./api/execute";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(home);
app.use(execute);
app.use(express.static("./public"));
app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));
