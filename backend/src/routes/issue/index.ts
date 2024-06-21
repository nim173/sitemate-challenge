import express from 'express'
import { IssueController } from '../../controller'

const IssuesRouter = express.Router()

IssuesRouter.get('/', IssueController.getIssuesHandler)
IssuesRouter.post('/', IssueController.createIssueHandler)
IssuesRouter.put('/:id', IssueController.updateIssueHandler)
IssuesRouter.delete('/:id', IssueController.deleteIssueHandler)

export default IssuesRouter
