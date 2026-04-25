import "dotenv/config"
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import indexRoutes from "./routes/index.routes.js"
import loginRoutes from "./routes/login.routes.js"
import usersRoutes from "./routes/users.route.js"
import { connectDB } from "./utils/db.js"

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(indexRoutes)
app.use(loginRoutes)
app.use(usersRoutes)


const PORT = 8000

app.listen(PORT,console.log("HTTP://LOCALHOST:"+PORT))
