import './Todo.css';
import React from 'react';
const { useState, useEffect } = React;
import { useDispatch, useSelector } from 'react-redux';
import { todolistActions } from '../_actions';

const AddTaskForm = ({ addTask, id }) => {
  const [value, setValue] = useState(''); 
  const handleSubmit = (e) => {
    e.preventDefault();
    value && addTask(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter a title for this task…"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        <i className="fas fa-plus">+</i>
      </button>
    </form>
  );
};

const ToDoList = () => {

  var tablelists = [] 
  var tabList = [] 
  const users = useSelector(state => state.users);
  const [tasks, setTasks] = useState([ 
  ]);


  const user = useSelector((state) => state.authentication.user);
  const List = useSelector(state => state.todolist); 
 
  const listsTo = (list) => { 
      for (const item in list) { 
        if (list[item][0] && list[item][0].id !== undefined) {
          tablelists = tablelists.reverse()///.filter((items) => items.id !== list[item][0].id);
          tablelists.push(list[item][0]) }
        listsTo() } 
    return tablelists;
  }
  tablelists = listsTo(List);
  tablelists = tablelists.reverse().filter((item) => item.id == user.id)
  const arrayOfObj = tablelists[0] &&Object.entries(tablelists[0]).map((e) => ( { [e[0]]: e[1] } ));
  arrayOfObj ? arrayOfObj.pop() : null
  arrayOfObj &&arrayOfObj.forEach((item ,i)=> tabList.push(item[i])) 
  

   
  //const okLists = Lists&&!Lists.length ?  Lists&&Object.entries(Lists[0]).map((e) => ( { [e[0]]: e[1] } )) : Lists&&Object.entries(Lists[0]).map((e,i) => (  e[1]  ));
   
  const dispatch = useDispatch();
  const taskslist = [] 

  const addTask = (text) => {
    const task = [...tasks, { text ,isCompleted : true} ];
      
    setTasks(task);
    !taskslist[0] ? taskslist.push(Object.assign({} ,{id : user.id} , task)) 
      : taskslist.push(task); 
    const listt = taskslist[0]  
   dispatch(todolistActions.ToDoList(taskslist));
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted; 
    setTasks(newTasks);
    
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    const taskslist = [];
    taskslist.push(Object.assign({}, { id: user.id }, newTasks))  

    const listt = taskslist[0]  
    dispatch(todolistActions.ToDoList(listt));
  };  
  return (
 
    <div >

<div className="todo-list">

      {
        
        tabList.map((task, index) => (
        <div key={index} className="todo">
          <span
            onClick={() => toggleTask(index)}
            className={
              task.isCompleted ? 'todo-completed' : 'todo-text'
            }
          >
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}>
            <i className="fas fa-trash-alt">-</i>
          </button>
        </div>
      ))  }
      <AddTaskForm addTask={addTask} id={user.id} />
    </div></div>
  );
};
export { ToDoList }; 
