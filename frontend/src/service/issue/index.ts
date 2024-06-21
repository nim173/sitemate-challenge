import axiosClient from '../../http'
import { Issue, IssueInput } from '../../types'

export const getIssues = async () => {
  try {
    console.log('fd')
    const response = await axiosClient.get<Issue[]>('/issues')
    console.log(response.data)
    return response.data
  } catch (error) {
    handleApiError(error)
  }
}

export const createIssue = async (issueInput: IssueInput) => {
  try {
    const response = await axiosClient.post<Issue>('/issues', issueInput)
    return response.data
  } catch (error) {
    handleApiError(error)
  }
}

export const updateIssue = async (id: number, updatedIssue: IssueInput) => {
  try {
    const response = await axiosClient.put<Issue>(`/issues/${id}`, updatedIssue)
    return response.data
  } catch (error) {
    handleApiError(error)
  }
}

export const deleteIssue = async (id: number) => {
  try {
    await axiosClient.delete(`/issues/${id}`)
  } catch (error) {
    handleApiError(error)
  }
}

const handleApiError = (error: any) => {
  console.error('API Error:', error)
  throw error
}
