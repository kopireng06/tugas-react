import { useState,useRef,useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from "gsap";
import { Link,useLocation } from "react-router-dom";
import { sidebarVariants,linkVariants, dangerVariants } from "./Variants";

import { useDispatch,useSelector } from "react-redux";
import { addTodo } from "../app/todoSlice";

const Sidebar = ()=>{
    const [inputValue,setInputValue] = useState("");
    const [dangerAlertStat,setDangerAlertStat] = useState(false);
    const [clickedHamburger,setClickedHamburger] = useState(false);;
    const {pathname} = useLocation();
    
    const ListTodo = useSelector((state) => state.dataTodo.todo);
    const lengthTodo = ListTodo.length;
    const lastID = lengthTodo > 0 ? ListTodo[lengthTodo-1].id+1 : 0;

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue === ""){
            setDangerAlertStat(true);
        }
        else{
            setDangerAlertStat(false);
            dispatch(addTodo({inputValue,lastID}));
        }
    }

    const renderIsiSidebar = ()=>{
        if(pathname=="/"){
            return (
                <>
                    <h1 className="my-todo-app">MY TODO APP</h1>
                    <input onChange={handleChange} type="text" className="input-list" placeholder="isikan nama todo baru"/>
                </>
            );
        }
        else if(pathname=="/about/about-app"){
            return <h1 className="my-todo-app">ABOUT APP</h1>
        }
        else if(pathname=="/about/about-author"){
            return <h1 className="my-todo-app">ABOUT AUTHOR</h1>
        }
    }

    return(
        <form onSubmit={handleSubmit} className="container-sidebar flex flex-col justify-center items-center">
            {renderIsiSidebar()}
            <DangerAlert dangerAlertStat={dangerAlertStat}/>
            <ListLink key="ListLink" clickedHamburger={clickedHamburger}/>    
            <Hamburger clickedHamburger={clickedHamburger} setClickedHamburger={setClickedHamburger}/>
        </form>
    )
}

const DangerAlert = ({dangerAlertStat}) =>{
    return(
        <AnimatePresence>  
            {             
                dangerAlertStat && 
                    <motion.p key="DangerAlert" variants={dangerVariants} initial="initial" animate="animate" exit="exit"
                    className="danger">Mohon isikan nama todo terlebih dahulu</motion.p> 
            }
        </AnimatePresence>
    )
}

const ListLink = ({clickedHamburger})=>{
    const listPath = [
        {
            judul:"HOME",
            path:"/"
        },
        {
            judul:"ABOUT APP",
            path:"/about/about-app"
        },
        {
            judul:"ABOUT AUTHOR",
            path:"/about/about-author"
        }
    ]
    return(
        <AnimatePresence>
            {
                clickedHamburger &&
                <motion.div variants={sidebarVariants} initial="initial" animate="animate" exit="exit"
                className="nav-sidebar flex flex-col justify-center items-center">
                    {listPath.map(({judul,path})=>{
                        return(
                            <Link key={judul} to={path} className="link-sidebar">
                                <motion.li variants={linkVariants}>{judul}</motion.li>
                            </Link>
                        )
                    })}
                </motion.div>    
            }
        </AnimatePresence>
    )
}

const Hamburger = ({setClickedHamburger,clickedHamburger})=>{

    const [animateHamburger,setAnimateHamburger] = useState();
    const upperHamburger = useRef();
    const middleHamburger = useRef();
    const lowerHamburger = useRef();

    const handleClickHamburger = ()=>{
        setClickedHamburger(!clickedHamburger);
        animateHamburger.reversed() ? animateHamburger.play() : animateHamburger.reverse();
    }
    
    useEffect(()=>{
        const newAnimateHamburger = gsap.timeline({paused:true,reversed:true})
        .to(upperHamburger.current, 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:"easeInOut"}, 'start')
        .to(middleHamburger.current, 0.5, {autoAlpha: 0}, 'start')
        .to(lowerHamburger.current, 0.5, {attr: {d: "M8,8 L2,2"}, x: 1, ease:"easeInOut"}, 'start');
        setAnimateHamburger(newAnimateHamburger);
    },[])
    
    return(
        <svg onClick={handleClickHamburger} viewBox="0 0 12 10" className={"hamburger "+(clickedHamburger ? 'bg-white' : 'bg-blue')}>
            <path ref={upperHamburger} d="M10,2 L2,2" className={"upper hamburger-line "+(clickedHamburger ? 'hamburger-blue' : 'hamburger-white')}/>
            <path ref={middleHamburger} d="M2,5 L10,5" className={"upper hamburger-line "+(clickedHamburger ? 'hamburger-blue' : 'hamburger-white')}/>
            <path ref={lowerHamburger} d="M10,8 L2,8" className={"upper hamburger-line "+(clickedHamburger ? 'hamburger-blue' : 'hamburger-white')}/>   
        </svg>
    )
}

export default Sidebar;