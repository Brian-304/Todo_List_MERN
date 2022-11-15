import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import TodoForm from './components/TodoForm';

//function to dislay 
function App() {

  const [lists, setLists] = useState([
    {
      task: "First task, Get red Belt",
      status: false
    },
    {
      task: "Second task, Get black belt",
      status: true
    },
    {
      task: "Third task, complete stack",
      status: true
    }
  ])

  //Add task
  const addTask = (taskToCreate) => {
    console.log("hello", taskToCreate);

    setLists([...lists, taskToCreate ])
  }

  //Update
  const updateTask = (e, idx) => {
    console.log("update", idx)

    const copy = [...lists];
    copy[idx].status = !copy[idx].status;
    setLists(copy);

  }

  //Delete
  const deleteList = (e, idx) => {
    console.log("delete", idx)
    const filteredLists = lists.filter((l, listIdx) => {
      if (idx === listIdx) {
        return false
      } else {
        return true
      }

    })
    setLists(filteredLists)
  }

  return (
    <div className="App">
      <TodoForm addTask={addTask}/>
      {/* {JSON.stringify(lists)} */}
      <Display lists={lists} 
      updateTask={updateTask}
      deleteList={deleteList} />

    </div>
  );
}

export default App;
