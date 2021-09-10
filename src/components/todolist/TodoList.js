import Todo from './Todo'

const TodoList = ({ListTodo,setListTodo}) => {

    //FUNGSI UNTUK MENGHAPUS TODO
    const handleClickTrash = (id) => {
        let index = ListTodo.findIndex(x=> x.id === id);
        const newTodo = [...ListTodo];
        newTodo.splice(index,1);
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

    return (  
        <div className="p-10 flex flex-col items-center justify-center w-full">
            {/* MENGIRIM FUNGSI handleClickTrash ke List Component */}
            {
                ListTodo.map(({id,title,completed})=><Todo key={id} id={id}
                title={title} handleChangeCheckBox={handleChangeCheckBox} 
                completed={completed} handleClickTrash={handleClickTrash}/>)
            }
        </div>
    );
}
 
export default TodoList;