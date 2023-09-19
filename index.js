const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { UserRoute } = require("./Routes/Users.Routes");
const { QuestionRoute } = require("./Routes/Questions.Routes");
const { HistoryRoute } = require("./Routes/History.Routes");
const { connection } = require("./config/db");

const app = express();
app.use(cors())
app.use(express.json());

//Routes
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the backend of ScriptAI");
});
app.use("/user", UserRoute);
app.use("/question", QuestionRoute);
app.use("/history", HistoryRoute);


//Server Running
const port = process.env.PORT || 5000;

app.listen(8080, async () => {
	try {
		await connection();
		console.log(`Listening at port - 8080`);
	} catch (error) {
		console.error("error",error.message);
	}
});