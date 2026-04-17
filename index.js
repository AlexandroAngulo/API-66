import express from 'express'
import morgan from 'morgan'
import indexRoute from "./routes/index.routes.js"

const app = express()

app.use(morgan("dev"))
app.use(indexRoute)


const PORT = 3000

app.listen(PORT,console.log("HTTP://LOCALHOST:"+PORT))