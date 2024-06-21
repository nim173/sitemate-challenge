import express, { Request, Response } from 'express'
import * as http from 'http'

// Initialize Express application
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// Start the server
const server = http.createServer(app)
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
