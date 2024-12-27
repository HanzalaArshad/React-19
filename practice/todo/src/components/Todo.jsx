import { useEffect, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { localstorage, setlocalstorage } from "./TodoLocalStorage";

const Todo = () => {


  // Initialize tasks from localStorage
  const [task, setTask] = useState(()=>localstorage());
     
  const [date, setDate] = useState("");

  const handlesubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    // Check if task already exists
    const ifTodoMatched = task.find((currtask) => currtask.content === content);
    if (ifTodoMatched) return;

    setTask((prev) => [...prev, { id, content, checked }]);
  };

  // Update localStorage whenever tasks change
  setlocalstorage(task)
  // Update date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDate(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDelete = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  const handleClear = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      }
      return curTask;
    });
    setTask(updatedTask);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>List</h1>
        </header>

        <h2 className="date-time">Date-time: {date}</h2>

        <TodoForm onAddTodo={handlesubmit} />

        <section className="myUnOrdList">
          <ul>
            {task.map((currelem) => (
              <TodoList
                key={currelem.id}
                data={currelem.content}
                checked={currelem.checked}
                onHandleDelete={handleDelete}
                onhandlechecktodo={handleCheckedTodo}
              />
            ))}
          </ul>
        </section>

        <section>
          <button className="clear-btn" onClick={handleClear}>
            Clear All
          </button>
        </section>
      </section>
    </>
  );
};

export default Todo;
