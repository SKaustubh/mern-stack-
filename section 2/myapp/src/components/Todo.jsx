import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (e) => {
    if (!e.target.value.trim()) return;
    if (e.code === "Enter") {
      console.log(e.target.value);
      setTodoList([...todoList, { text: e.target.value, completed: false }]);
      console.log(todoList);
      e.target.value = "";
    }
  };

  const deleteTodo = (i) => {
    console.log(i);
    let temp = todoList;
    temp.splice(i, 1);
    setTodoList([...temp]);
  };

  const completeTodo = (index) => {
    console.log(index);

    let temp = todoList;
    temp[index].completed = !temp[index].completed;
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body></body>
    </html>;
    setTodoList([...temp]);
  };
  return (
    <div className="bg-body-secondary vh-100">
      <div className="container">
        <h1 className="test-center mt-5">Todo app</h1>
        <div className="card">
          <div className="card-header">
            <input
              type="text"
              className="form-control"
              onKeyDown={addNewTodo}
            />
          </div>
          <div className="card-body">
            <ul className="list-group">
              {todoList.map((todo, index) => {
                return (
                  <li className="list-group-item">
                    <input
                      checked={todo.completed}
                      type="checkbox"
                      className="m-2 "
                    />
                    <span
                      className={
                        todo.completed
                          ? "fw-bold text-success text-decoration-line-through"
                          : "fw-bold text-danger"
                      }
                    >
                      {todo.text}
                    </span>
                    <button
                      className="btn btn-primary m-2 "
                      onClick={() => {
                        completeTodo(index);
                      }}
                    >
                      Add
                    </button>
                    <button
                      className="btn btn-dark  m-2"
                      onClick={() => deleteTodo(index)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
