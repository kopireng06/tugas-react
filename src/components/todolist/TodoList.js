import {useState} from 'react'
import List from './List'
import InputList from './InputList'
import DataList from './DataList'
import './TodoList.css'

const TodoList = ()=>{

  const [ListTodo,setListTodo] = useState(DataList);

   //FUNGSI UNTUK MENGHAPUS TODO
   const handleClickTrash = (id) => {
    let index = ListTodo.findIndex(x=> x.id === id);
    const newTodo = [...ListTodo];
    newTodo.splice(index,1);
    console.log(newTodo);
    setListTodo(newTodo);
  }

  //FUNGSI UNTUK MENGUBAH STATUS TODO
  const handleChangeCheckBox = (id)=> {
    let index = ListTodo.findIndex(x=> x.id === id);
    const newTodo = Object.assign({}, ListTodo[index]);
    newTodo.completed = !newTodo.completed;
    setListTodo([
      ...ListTodo.slice(0,index),
      newTodo,
      ...ListTodo.slice(index+1)
    ]);
  }

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
      <InputList addListTodo={addListTodo}/> 
      <div className="container-todolist">
          <div className="p-10 flex flex-col items-center justify-center w-full">
            {/* MENGIRIM FUNGSI handleClickTrash ke List Component */}
            {
                ListTodo.map(({id,title,completed})=><List key={id} id={id}
                title={title} handleChangeCheckBox={handleChangeCheckBox} 
                completed={completed} handleClickTrash={handleClickTrash}/>)
            }
          </div>
      </div>
    </div>
  )

}
 
export default TodoList;