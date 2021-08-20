import { config as loadEnvironmentVariables } from 'dotenv'
import express from 'express'
import { InmemoryDatabase } from "./inmemory-database.mjs";

loadEnvironmentVariables()
const app = express()
const database = new InmemoryDatabase();

const powered = process.env.API_POWERED
const version = process.env.API_VERSION
const secret = process.env.API_SECRET
const port = process.env.SERVER_PORT


app.use(express.json())

app.get("/", (req, res) => res.json({ ok: true}))

app.get("/env", (req, res) => res.json({ powered, version, secret}))

app.post("/", (req, res) => {
    database.add("Attempt", Math.floor(Math.random() * 655))
    return res.json(database.getAttempts())
})

app.listen(port, () => console.log(`[Server Started] - Listening on ${port}`))
