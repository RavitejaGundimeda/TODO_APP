import React, { useState, useEffect } from 'react' ;
import Todo from './Todo' ;
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from "firebase";

function App() {
   // Below we are adding things to arrays without refreshing, whenever u want to change todos we change using setTodos
  const [todos, setTodos] = useState([]); // Now we had actually setup some short term memory for app. this would be like a short term memory of what todos are.
 
  const [input, setInput] = useState('');

  // When the app loads we need to listen to the database and fetch new todos as bthey get added/removed

      useEffect(() => {
          // This code fires when app.js loads
          db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
          //console.log(snapshot.docs.map(doc => doc.data()));
          setTodos(snapshot.docs.map(doc =>({id : doc.id, todo: doc.data().todo})))
      })
        
      }, [input]);

      const addTodo = (event) => {
        
              event.preventDefault(); //will stop the refresh
              //this simply adds our given input to the previous todos


              // Below statement is for adding todos to database.
            db.collection('todos').add({
              todo: input,
              timestamp: firebase.firestore.FieldValue.serverTimestamp()

            })

              //setTodos([...todos,input]);
              //to clear the input after everytime we have given  --- see at console u get it!
              setInput(''); //clear up the input after hitting submit
              
      }

  return (    // The belo code is jsx code. We can dynamically run java scripts in jsx
    <div className="App">
      <h1>TODO Application</h1> 
      <form>
      
      <FormControl>
          <InputLabel> Please write a ToDo </InputLabel>
          <Input value = {input} onChange = {event => setInput(event.target.value)}/>
     </FormControl>

      <Button disabled = {!input} type = "submit" onClick={addTodo} variant="contained"  color="primary">
      Add ToDo
      </Button>
      
      {/* <button type = "submit" onClick={addTodo}> Add ToDo </button> */}
      </form>
      <ul> 
        {
          todos.map(todo => (
            <Todo todo ={todo} />
            //<li> {todo} </li>
          ))
        }
        
      </ul>
    </div>
  );
}

export default App;
