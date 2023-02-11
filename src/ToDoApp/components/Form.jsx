import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";


export default function Form() {

  const [title,setTitle] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo({title}))
    setTitle(" ")
  }

  return (
    <form
      style={{ display: "flex", alignItems: "center" }}
      onSubmit = {handleSubmit}
    >
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}  