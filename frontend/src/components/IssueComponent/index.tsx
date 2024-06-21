import { useEffect, useState } from 'react'
import { IssueService } from '../../service'
import { Issue } from '../../types'
import { Box, Button, Center, HStack, Input, Text, VStack } from '@chakra-ui/react'

const IssueComponent = () => {
  const [issues, setIssues] = useState<Issue[] | undefined>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetchIssues()
  }, [])

  const fetchIssues = async () => {
    try {
      const fetchedIssues = await IssueService.getIssues()
      setIssues(fetchedIssues)
    } catch (error) {
      console.error('Error fetching issues:', error)
    }
  }

  const handleCreateIssue = async () => {
    const newIssue = { title, description }
    try {
      const createdIssue = await IssueService.createIssue(newIssue)
      console.log('Created issue:', createdIssue)
      refresh()
    } catch (error) {
      console.error('Error creating issue:', error)
    }
  }

  const handleUpdateIssue = async (id: number) => {
    const updatedIssue = { title, description }
    try {
      const updated = await IssueService.updateIssue(id, updatedIssue)
      console.log('Updated issue:', updated)
      refresh()
    } catch (error) {
      console.error('Error updating issue:', error)
    }
  }

  const handleDeleteIssue = async (id: number) => {
    try {
      await IssueService.deleteIssue(id)
      console.log('Deleted issue with id:', id)
      refresh()
    } catch (error) {
      console.error('Error deleting issue:', error)
    }
  }

  const refresh = () => {
    // Refresh the list after creating a new issue
    fetchIssues()
    // reset form
    setTitle('')
    setDescription('')
  }

  return (
    <Center mt="8">
      <Box width="80%" p="4" borderWidth="1px" borderRadius="lg">
        <Text fontSize="2xl" mb="4">
          Issues
        </Text>

        <VStack spacing="4" mb="8">
          <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button colorScheme="teal" onClick={handleCreateIssue}>
            Create Issue
          </Button>
        </VStack>

        {issues?.length ? (
          issues.map((issue) => (
            <Box key={issue.id} p="4" borderWidth="1px" borderRadius="md" mb="4">
              <Text fontWeight="bold">{issue.title}</Text>
              <Text>{issue.description}</Text>
              <HStack mt="4" spacing="4">
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    setTitle(issue.title)
                    setDescription(issue.description)
                    handleUpdateIssue(issue.id)
                  }}
                >
                  Update
                </Button>
                <Button colorScheme="red" onClick={() => handleDeleteIssue(issue.id)}>
                  Delete
                </Button>
              </HStack>
            </Box>
          ))
        ) : (
          <Text>No issues found.</Text>
        )}
      </Box>
    </Center>
  )
}

export default IssueComponent
