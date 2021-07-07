import React, { useState } from "react";
import axiosWithAuth from "../axiosWithAuth";

export default function AddFriend(props) {
  const [form, setForm] = useState({ name: "", age: 0, email: "" });

  function onInput(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function onAddFriend(event) {
    event.preventDefault();
    axiosWithAuth()
      .post(`http://localhost:5000/api/friends`, form)
      .then(response => {
        props.history.push("/friends");
      })
      .catch(error => {
        console.error(error.response);
      });
  }

  return (
    <form action="" className="add-friend" onSubmit={onAddFriend}>
      <label htmlFor="name">
        Name
        <input type="text" name="name" value={form.name} onChange={onInput} />
      </label>
      <label htmlFor="age">
        Age
        <input type="number" name="age" value={form.age} onChange={onInput} />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onInput}
        />
      </label>
      <button type="submit">Add a friend</button>
    </form>
  );
}
