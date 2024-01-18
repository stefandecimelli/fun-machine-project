import express from "express";

const app = express.Router();

app.get("/", (_, res) => {
	res.render("index");
});

export default app;