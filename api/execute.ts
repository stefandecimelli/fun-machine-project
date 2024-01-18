import express from "express";
import {spawnSync} from "node:child_process";
import ejs from "ejs";
import path from "node:path";

const app = express.Router();
const templateFile = path.resolve("views/execResult.ejs");

app.post("/execute", async (req, res) => {
	if (req.body.command.trim() === "") {
		res.status(400).send("Invalid Input");
		return;
	}

	const cmd = req.body.command.trim().split(" ");
	const out = spawnSync(cmd[0], cmd.slice(1));
	const result = await ejs.renderFile(templateFile, {
		result: out.stdout, 
		error: out.stderr,
		command: req.body.command
	});
	res.send(result);
});

export default app;