import Trash from '../../foto/trash.png'

const Todo = ({title,id,completed,handleChangeCheckBox,handleClickTrash})=>{

  return(
    <div className={"list flex flex-wrap "+(completed ? 'finished' : 'not-yet')}>
      <span className="flex-0">{title}</span>
      <div className="flex-1 flex justify-end">
        {/* MEMAKAI FUNGSI handleClickTrash dan handleChangeChangeBox DARI TodoList Component */}
        <input onChange={()=>handleChangeCheckBox(id)} className="checkbox" 
        type="checkbox" defaultChecked={completed} />
        <img onClick={()=>handleClickTrash(id)} src={Trash} 
        className="trash" alt="trash-icon" />
      </div>
    </div>
  )
}

export default Todo;