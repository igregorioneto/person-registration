require("dotenv").config();
import "reflect-metadata";
import express from "express";
import router from "./routes/routes";
import path from "path"; 
import './database/connect';


const app = express();

app.use(express.json());
app.use(router);

app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "upload"))
);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));