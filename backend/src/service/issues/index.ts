import { Issue, IssueInput } from '../../types'

let issues: Issue[] = [
  { id: 1, title: 'Issue 1', description: 'Fix login' },
  { id: 2, title: 'Issue 2', description: 'Update UI' },
  { id: 3, title: 'Issue 3', description: 'Fix bug' },
]

let issueCounter = issues.length

const getIssues = (): Issue[] => {
  return issues
}

const createNewIssue = (issueInput: IssueInput): Issue => {
  const newIssue: Issue = {
    // use issueCounter to prevent duplication of ids
    id: ++issueCounter,
    ...issueInput,
  }
  issues.push(newIssue)
  return newIssue
}

const updateExistingIssue = (id: number, updatedIssue: IssueInput): Issue => {
  const index = getIndex(id)
  issues[index] = { ...updatedIssue, id }
  return issues[index]
}

const deleteIssueById = (id: number): void => {
  getIndex(id)
  issues = issues.filter((issue) => issue.id !== id)
}

// helper functions
const getIndex = (id: number): number => {
  // return if index exists, if not throw
  const index = issues.findIndex((issue) => issue.id === id)
  if (index == -1) {
    throw new Error(`Issue with id ${id} not found`)
  }
  return index
}

export { getIssues, createNewIssue, updateExistingIssue, deleteIssueById }
