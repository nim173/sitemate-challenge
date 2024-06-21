import { Request, Response } from 'express'
import { IssueService } from '../../service'
import { IssueInput } from '../../types'

export const getIssuesHandler = (_req: Request, res: Response): void => {
  const issues = IssueService.getIssues()

  console.log(`\nIssues retrieved: ${stringify(issues)}\n`)
  res.json(issues)
}

export const createIssueHandler = (req: Request, res: Response): void => {
  try {
    const newIssue: IssueInput = IssueInput.check(req.body)
    const createdIssue = IssueService.createNewIssue(newIssue)

    console.log(`\nIssue created: ${stringify(createdIssue)}\n`)
    res.status(201).json(createdIssue)
  } catch (e: any) {
    console.log(e)
    res.status(400).send(e.message)
  }
}

export const updateIssueHandler = (req: Request, res: Response): void => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      throw new Error('Invalid ID')
    }

    const updatedIssue: IssueInput = IssueInput.check(req.body)
    const result = IssueService.updateExistingIssue(id, updatedIssue)

    console.log(`\nIssue updated: ${stringify(result)}\n`)
    res.json(result)
  } catch (e: any) {
    console.log(e)
    res.status(400).send(e.message)
  }
}

export const deleteIssueHandler = (req: Request, res: Response): void => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      throw new Error('Invalid ID')
    }

    IssueService.deleteIssueById(id)

    const msg = `\nIssue deleted with id: ${id}\n`
    console.log(msg)
    res.status(200).send(msg)
  } catch (e: any) {
    console.log(e)
    res.status(400).send(e.message)
  }
}

const stringify = (json: object) => {
  return JSON.stringify(json, null, 2)
}
