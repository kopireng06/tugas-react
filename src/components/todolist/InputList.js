import { Component } from "react";
import { AnimatePresence, motion } from 'framer-motion';

class InputList extends Component{
    constructor(){
        super();
        this.state = {
            inputValue:"",
            dangerAlert:false //STATUS DANGER ALERT SUDAH DIRENDER ATAU BELUM
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //FUNGSI UNTUK MERECORD PERUBAHAN NILAI PADA INPUT
    handleChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }

    //FUNGSI UNTUK MENGHANDLE SUBMIT PADA INPUT
    handleSubmit(e){
        e.preventDefault();
        if(this.state.inputValue!=""){
            //MEMANGGIL FUNGSI addListTodo DARI TodoList Component
            this.props.addListTodo(this.state.inputValue); 
            this.setState({
                dangerAlert:false
            });
        }
        else{
            this.setState({
                dangerAlert:true
            });
        }
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit} className="container-sidebar flex flex-col justify-center items-center">
            <h1 className="my-todo-app">MY TODO APP</h1>
            <input onChange={this.handleChange} type="text" className="input-list" placeholder="isikan nama todo baru"/>
            <AnimatePresence>
                {             
                this.state.dangerAlert && 
                    <motion.p initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-40,opacity:0}}
                    className="danger">Mohon isikan nama todo terlebih dahulu</motion.p> 
                }
            </AnimatePresence>
        </form>
        )
    }
}

export default InputList;