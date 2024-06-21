import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import IssueComponent from './components/IssueComponent'

function App() {
  return (
    <ChakraProvider>
      <IssueComponent />
    </ChakraProvider>
  )
}

export default App
