import express from "express"
import { createLog } from "./createLog.js";

const hostname = "127.0.0.1"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(createLog);

app.get("/home", (req, res) => {
    res.status(200).send("Helo Abhinav i am shivani");
})


app.listen(4224, hostname,() => {
    console.log("server started at 4224 port");
})