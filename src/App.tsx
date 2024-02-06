import './App.css'
import Card from './Components/CardContainer/Card'
import Container from './Components/Container/Container'
import DynamicHeading from './Components/DynamicHeading'
import TaskForm from './Components/TaskForm'

function App() {


  return (
  <Container className=' py-10'>
    <DynamicHeading >ToDo App</DynamicHeading>
    <TaskForm />
    <Card />
  </Container>
  )
}

export default App
