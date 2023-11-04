import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [name, setName] = useState();
  const [date, setDate] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (name && date) {
      onNewItem(name, date);
      setName("");
      setDate("");
    }
  };

  return (
    <div className="container">
      <div className="row items-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={date} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success items-button"
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
