import {useState} from 'react'
import Sidebar from './Sidebar'
import DataList from './DataList'
import './TodoList.css'
import TodoList from './TodoList'
import AboutApp from './AboutApp'
import { Route } from 'react-router-dom'


const MyTodoListApp = ()=>{

  const [ListTodo,setListTodo] = useState(DataList);

  //FUNGSI UNTUK MENAMBAH TODO
  const addListTodo = (nameList) => {
    let lengthList = ListTodo.length;
    if(lengthList>=1){
      var id = ListTodo[lengthList-1].id + 1;
    }
    else{
      var id = 1;
    }
    setListTodo([
        ...ListTodo,
        {
          id:id,
          title:nameList,
          completed:false
        }
    ])
  }

  return(
    <div className="w-full container-root">
      {/* MENGIRIM FUNGSI addListTodo ke InputList Component*/}
      <Sidebar addListTodo={addListTodo}/> 
      <div className="container-todolist">
        <Route exact path="/">
          <TodoList setListTodo={setListTodo} ListTodo={ListTodo}/> 
        </Route>
        <Route path="/:about">
          <AboutApp /> 
        </Route>
      </div>
    </div>
  )

}
 
export default MyTodoListApp;