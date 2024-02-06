import './App.css'
import Container from './Components/Container/Container'
import DynamicHeading from './Components/DynamicHeading'
import TaskForm from './Components/TaskForm'

function App() {


  return (
  <Container className=' py-10'>
    <DynamicHeading >ToDo App</DynamicHeading>
    <TaskForm />
  </Container>
  )
}

export default App
