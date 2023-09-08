import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import './App.css'
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <AddTodo />
      <Navbar />
      <Todos />
    </main>
  )
}

export default App