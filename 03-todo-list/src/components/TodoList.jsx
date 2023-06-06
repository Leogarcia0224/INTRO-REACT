import { useState } from 'react'

const TodoList = () => {
  const [inputValue, setInputValue] = useState('')

  const handleAddItem = () => {
    console.log('Nueva tarea : ', inputValue)
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* Para tomar control de la informacion que hay en input , podemos hacer uso del evento onchange para guaradar la informacion del input a penas sea teclado y guardar en mi estado  */}
      <input type='text' inputValue={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddItem}>Agregar</button>

      <ul>
        <li>Comprar mercado
          <button>Eliminar</button>
        </li>
        <li>Lavar ropa
          <button>Eliminar</button>
        </li>
        <li>Pasear al perro
          <button>Eliminar</button>
        </li>
        <li>Comprar mercado
          <button>Eliminar</button>
        </li>
      </ul>
    </div>

  )
}

export default TodoList
