import './App.css'
import Card from './Components/CardContainer/Card'
import Container from './Components/Container/Container'
import DynamicHeading from './Components/DynamicHeading'
import TaskCounter from './Components/TaskCounter/TaskCounter'
import TaskForm from './Components/TaskForm'

function App() {


  return (
  <Container className=' py-10'>
    <DynamicHeading  className=' mt-[35px]'>ToDo App</DynamicHeading>
    <TaskForm />
    <Card />
    <TaskCounter />
  </Container>
  )
}

export default App
