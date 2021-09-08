import {Component} from 'react'
import List from './List'
import InputList from './InputList'
import DataList from './DataList'
import './TodoList.css'

class TodoList extends Component  {

  constructor(props){
    super(props);
    this.state = {
      ListTodo:DataList //STATE UNTUK MENYIMPAN TODO
    }
    this.handleClickTrash = this.handleClickTrash.bind(this);
    this.addListTodo = this.addListTodo.bind(this);
  }

  //FUNGSI UNTUK MENGHAPUS TODO
  handleClickTrash(id){
    let index = this.state.ListTodo.findIndex(x=> x.id === id);
    this.setState({
      ListTodo: [
        ...this.state.ListTodo.slice(0,index),
        ...this.state.ListTodo.slice(index+1)
     ]
    })
  }

  //FUNGSI UNTUK MENAMBAH TODO
  addListTodo(nameList){
    let lengthList = this.state.ListTodo.length;
    if(lengthList>1){
      var id = this.state.ListTodo[lengthList-1].id + 1;
    }
    else{
      var id = 1;
    }
    this.setState({
      ListTodo:[
        ...this.state.ListTodo,
        {
          id:id,
          title:nameList,
          completed:false
        }
      ]
    })
  }

  render(){
    return(
      <div className="w-full container-root">
        {/* MENGIRIM FUNGSI addListTodo ke InputList Component*/}
        <InputList addListTodo={this.addListTodo}/> 
        <div className="container-todolist">
            <div className="p-10 flex flex-col items-center justify-center w-full">
              {/* MENGIRIM FUNGSI handleClickTrash ke List Component */}
              {
                  this.state.ListTodo.map(({id,title,completed})=><List key={id} id={id}
                  title={title} completed={completed} handleClickTrash={this.handleClickTrash}/>)
              }
            </div>
        </div>
      </div>
    );
  }

}
 
export default TodoList;