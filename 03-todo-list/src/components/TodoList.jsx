import { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [inputValue, setInputValue] = useState('')

  const [todo , setTodos] = useState([])

  const handleAddItem = () => {
    if(inputValue.trim()){
      setTodos([...todo, inputValue])
      setInputValue('')
      
    }
  }

  return (
    <div>
      <h1>Lista de Tarea</h1>

      {/* Para tomar control de la informacion que hay en input , podemos hacer uso del evento onchange para guaradar la informacion del input a penas sea teclado y guardar en mi estado  */}
      
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddItem}>Agregar</button>

      <ul>
        {}
      </ul>
    </div>

  )
}

export default TodoList
