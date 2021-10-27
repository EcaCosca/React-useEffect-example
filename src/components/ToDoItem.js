const ToDoItem = ({todos, title, handleDelete}) => {
    return ( 
        <div className="todo-list">
            <h2>{title}</h2>
            {todos.map((todo) => (
                <div className="todo-preview">
                    <h2>{todo.title}</h2>
                    <p> {todo.content} </p>
                    <button onClick={() => handleDelete(todo.id)}>DELETE</button>
                </div>
            ))
                
            }
        </div>
     );
}

export default ToDoItem;