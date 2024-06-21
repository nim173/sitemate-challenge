import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import config from './config'
import { IssueRouter } from './routes'

const app: Express = express()
app.use(bodyParser.json())
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

// routes
app.use('/issues', IssueRouter)

// handle unmatched routes
app.use('*', (_req, res) => {
  res.status(404).send('404: Not Found')
})

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Internal Server Error')
})

app.listen(config.port, () => {
  console.log(`[server]: Server is running at http://localhost:${config.port}`)
})
