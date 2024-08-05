import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("genel");
  const [dueDate, setDueDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    addTodo(text, priority, category, dueDate);
    setText("");
    setPriority("low");
    setCategory("genel");
    setDueDate(new Date());
    console.log(priority, category);
  };

  return (
    <form onSubmit={handleSubmit} className=" p-4 bg-white rounded shadow-md">
      <div className="flex justify-between">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Görev"
          className="border p-2 m-2 rounded w-2/3 "
          required
        />
        <select
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
          className="border p-2 m-2 rounded w-1/2"
        >
          <option value="low">Düşük</option>
          <option value="medium">Orta</option>
          <option value="high">Yüksek</option>
        </select>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value), console.log(category);
          }}
          className="border p-2 m-2 rounded w-1/4"
        >
          <option value="genel">Genel</option>
          <option value="iş">İş</option>
          <option value="kişisel">Kişisel</option>
        </select>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          className=" w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 m-2 rounded w-1/6"
        >
          Ekle
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
