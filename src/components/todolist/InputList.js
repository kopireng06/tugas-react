import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';

const InputList = ({addListTodo})=>{
    const [inputValue,setInputValue] = useState("");
    const [dangerAlert,setDangerAlert] = useState(false); //STATUS DANGER ALERT SUDAH DIRENDER ATAU BELUM

    //FUNGSI UNTUK MERECORD PERUBAHAN NILAI PADA INPUT
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    //FUNGSI UNTUK MENGHANDLE SUBMIT PADA INPUT
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue!==""){
            //MEMANGGIL FUNGSI addListTodo DARI TodoList Component
            addListTodo(inputValue); 
            setDangerAlert(false);
        }
        else{
            setDangerAlert(true);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="container-sidebar flex flex-col justify-center items-center">
            <h1 className="my-todo-app">MY TODO APP</h1>
            <input onChange={handleChange} type="text" className="input-list" placeholder="isikan nama todo baru"/>
            <AnimatePresence>
                {             
                dangerAlert && 
                    <motion.p initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-40,opacity:0}}
                    className="danger">Mohon isikan nama todo terlebih dahulu</motion.p> 
                }
            </AnimatePresence>
        </form>
    )
}

export default InputList;