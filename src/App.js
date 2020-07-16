import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  console.log("input", input);

  // when the app loads, we need to listen to the database
  useEffect(() => {
    // this code fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      /* console.log(snapshot.docs.map((doc) => doc.data())); */
      setTodos(snapshot.docs.map(doc => ({ id: doc.id , todo: doc.data().todo})));
    });
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    /* console.log("working"); */
    /* setTodos([...todos, input]); */
    setInput("");
    /* console.log(todos); */
  };
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="adding-todo">Add Expense</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            id="adding-todo"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
