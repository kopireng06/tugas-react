import Todo from './Todo'
import { motion } from 'framer-motion';
import { pageVariants } from './Variants';
import { useSelector } from 'react-redux';


const TodoList = () => {

    const ListTodo = useSelector((state)=>state.dataTodo.todo);

    return (  
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
        className="flex flex-col items-center justify-center w-full">
            {
                ListTodo.map(({id,title,completed})=><Todo key={id} id={id}
                title={title} 
                completed={completed} />)
            }
        </motion.div>
    );
}
 
export default TodoList;