import "./Tailwind.min.css"
import "./Form.css"
import { baseData,baseError } from "./defaultData"
import { useState,useRef,useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { successVariants } from "./Variants"


const Form = () =>{

    const [valueForm,setValueForm] = useState(baseData);
    const [valueError,setValueError] = useState(baseError);
    const [stateSuccess,setStateSuccess] = useState(false);
    const suratKesungguhan = useRef(null);
    const form = useRef(null);

    useEffect(()=>{
        if(stateSuccess){
            setTimeout(()=>setStateSuccess(false),2000);
        }
    },[stateSuccess])

    const handleChangeInput = (e)=>{
        setValueForm({
            ...valueForm,
            [e.target.name] : e.target.value
        })
    }

    const handleChangeInputFile = (e)=>{
        setValueForm({
            ...valueForm,
            [e.target.name] : e.target.files[0].name
        })
    }

    const handleClickReset = ()=>{
        setValueForm(baseData); 
        setValueError(baseError);
        setStateSuccess(false);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        let lengthHandphone = valueForm.handphone.length;
        let stateError = false;
        const messageError = {
            name:"",
            email:"",
            handphone:"",
            pendidikan:"",
            photo:""
        }
        if(valueForm.name === "" || ! /^[A-Za-z\s]+$/.test(valueForm.name)){
            messageError.name = "Nama harus diisi dengan huruf saja";
        }
        else{
            messageError.name = "";
        }
        if(valueForm.email === ""){
            messageError.email = "Email harus diisi";
        }
        else{
            messageError.email = "";
        }
        if(valueForm.phone === "" || ! /^[0-9]+$/.test(valueForm.phone) 
        && ! (lengthHandphone >= 9 && lengthHandphone <= 14) ){
             messageError.handphone = "Handphone harus diisi dengan angka dengan panjang 9-14 karakter"
        }
        else{
            messageError.handphone = ""
        }
        if(valueForm.pendidikan === ""){
            messageError.pendidikan = "Pendidikan harus diisi" 
        }
        else{
            messageError.pendidikan = ""    
        }
        if(valueForm.photo === ""){
            messageError.photo= "Foto surat kesungguhan harus diisi"
        }
        else{
            messageError.photo = ""
        }
        for (let value in messageError) {
            if(messageError[value] !== ""){
                stateError = true;
            }
        }
        if(!stateError){
            handleClickReset();
            setStateSuccess(true);
            form.current.reset();
        }
        else{
            setStateSuccess(false);
            setValueError(messageError);
        }
    }

    return(
        <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-5/12 flex items-center
             w-full bg-form h-60 md:h-screen md:fixed top-0">
                 <h1 className="text-white font-bold text-3xl ml-3">Pendaftaran Peserta Coding Bootcamp</h1>
             </div>
            <form ref={form} className="form-pendaftaran md:w-8/12 w-full absolute top-52 md:top-0 md:right-0 bg-white md:h-screen md:overflow-y-scroll p-5">
                <label htmlFor="name" className="my-2 font-semibold">Name</label>
                <input onChange={handleChangeInput} placeholder="your name" className="focus:outline-none focus:border-blue-400 border-2 
                block h-10 p-3 shadow-sm w-full rounded-lg"  
                type="text" id="name" name="name" />
                <label htmlFor="email" className="my-2 font-semibold">Email</label>
                <input onChange={handleChangeInput} placeholder="your email" className="focus:outline-none focus:border-blue-400 border-2 
                block h-10 p-3 shadow-sm w-full rounded-lg"  
                type="email" id="email" name="email" />
                <label htmlFor="handphone" className="my-2 font-semibold">Handphone</label>
                <input onChange={handleChangeInput} placeholder="your handphone" className="focus:outline-none focus:border-blue-400 border-2 
                block h-10 p-3 shadow-sm w-full rounded-lg" 
                type="text" id="handphone" name="handphone" />
                <p className="my-2 font-semibold">Latar Belakang Pendidikan</p>
                <input type="radio" onChange={handleChangeInput} className="mx-2" id="IT" value="IT" name="pendidikan" />
                <label htmlFor="IT" className="mx-2">IT</label>
                <input type="radio" onChange={handleChangeInput} className="mx-2" id="Non IT" value="Non IT" name="pendidikan" />
                <label htmlFor="Non IT" className="mx-2">Non IT</label>
                <br />
                <label htmlFor="kelas" className="my-2 font-semibold">Kelas</label>
                <select onChange={handleChangeInput} className="focus:outline-none focus:border-blue-400 border-2 
                block h-12 p-2 shadow-sm w-full rounded-lg" name="kelas" id="kelas">
                    <option value="Coding Backend with Golang">Coding Backend with Golang</option>
                    <option value="Coding Frontend with ReactJS">Coding Frontend with ReactJS</option>
                    <option value="Fullstack Developer">Fullstack Developer</option>
                </select>
                <p className="my-2 font-semibold">Foto Surat Kesungguhan</p>
                <input ref={suratKesungguhan} accept="image/png, image/jpg, image/jpeg" onChange={handleChangeInputFile} className="block" hidden type="file" id="photo" name="photo" />
                <label htmlFor="photo" className="cursor-pointer my-2 p-2 bg-blue-500 text-white rounded-lg shadow-sm">Upload Foto</label>
                <span className="inline-block mx-3">{valueForm.photo}</span>
                <br />
                <label htmlFor="harapan" className="my-2 font-semibold">Harapan Untuk Coding Bootcamp Ini :</label>
                <textarea onChange={handleChangeInput} className="focus:outline-none focus:border-blue-400 border-2 
                    block h-12 p-2 shadow-sm w-full rounded-lg h-32 mb-6" name="harapan" id="harapan" cols="30" rows="20">
                </textarea>
                <div className="flex justify-end">
                    <input type="reset" onClick={handleClickReset} className="inline-block p-2 bg-red-500 text-white rounded shadow-sm" value="Reset" />
                    <input type="submit" onClick={handleSubmit} className="inline-block ml-3 p-2 bg-blue-500 text-white rounded shadow-sm" value="Submit" />
                </div>
                <DangerAlert valueError={valueError}/>
                {   
                    (()=>
                        <AnimatePresence>
                            {stateSuccess && ( <DangerSuccess/>)}
                        </AnimatePresence>)()
                }
            </form>
        </div>
    )
}

const DangerAlert = ({valueError}) => {
    const messageError = [];
    for (let value in valueError) {
        if(valueError[value] !== ""){
            messageError.push(valueError[value]);
        }
    }
    return messageError.map((value,index)=>{
        return (
            <div className="text-red-600 font-bold" key={index}>{`${index+1}. ${value}`}</div>
        )
    })
}

const DangerSuccess = () =>{
    return(
        <motion.div key="success" variants={successVariants} 
        initial="initial" animate="animate"
        exit="exit"
        className="fixed rounded-lg bottom-10 right-10 p-3 
        bg-green-600 flex justify-center items-center">
            <h1 className="text-white font-bold mx-2">SUKSES</h1>
            <p className="text-white mx-2">PENGISIAN FORM TELAH BERHASIL</p>
        </motion.div>
    )
}

export default Form;