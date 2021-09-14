import Trash from '../../foto/trash.png'
import { delTodo,changeTodo } from '../app/todoSlice';
import { useDispatch,useSelector } from 'react-redux';

const Todo = ({title,id,completed})=>{

  const dispatch = useDispatch();
  const ListTodo = useSelector((state)=>state.dataTodo.todo);
  console.log(id);
  
  const handleClickTrash = (id) => {
    let index = ListTodo.findIndex(todo=> todo.id === id);
    dispatch(delTodo(index));
  }

  const handleChangeCheckBox = (id,completed)=> {
      let index = ListTodo.findIndex(todo=> todo.id === id);
      dispatch(changeTodo({index,completed}))
  }

  return(
    <div className={"list flex flex-wrap "+(completed ? 'finished' : 'not-yet')}>
      <span className="flex-0">{title}</span>
      <div className="flex-1 flex justify-end">
        <input className="checkbox" onChange={()=>handleChangeCheckBox(id,completed)}
        type="checkbox" defaultChecked={completed} />
        <img  src={Trash} onClick={()=>handleClickTrash(id)}
        className="trash" alt="trash-icon" />
      </div>
    </div>
  )
}

export default Todo;