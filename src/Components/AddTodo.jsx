import { useContext, useRef } from "react";
import { TodoItemContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemContext);
  const nameElement = useRef();
  const dataElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const name = nameElement.current.value;
    const date = dataElement.current.value;
    if (name && date) {
      nameElement.current.value = "";
      dataElement.current.value = "";
      addNewItem(name, date);
    }
  };

  return (
    <div className="container">
      <form action="" className="row items-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input type="text" ref={nameElement} placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input ref={dataElement} type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success items-button">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
