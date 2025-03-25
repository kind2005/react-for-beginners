import { useState, useEffect } from "react";

function Todos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = e => setTodo(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if(todo === ""){
      return;
    }
    setTodos(currentArray => [todo, ...currentArray]);
    setTodo("");
  };
  const removeLi = curIdx => {
    setTodos(curTodos => curTodos.filter((_, index) => index !== curIdx));
  };
  useEffect(() => {console.log(todos);}, [todos]);
  
  return (
    <div>
        <hr/>
        <h1>My To-do List ({todos.length})</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={todo} onChange={onChange} placeholder="Write your to do" />
          <button>Add To do</button>
          <hr/>
          <ul>
            {todos.map((item, index) => (
              <li key={index}>{item}<button onClick={() => removeLi(index)}>X</button></li>
            ))}
          </ul>
        </form>
    </div>
  );
}

export default Todos;
