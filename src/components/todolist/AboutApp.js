import { useParams } from "react-router";
import ssTodo from "../../foto/ss-todo.PNG"
import Me from "../../foto/naufal.jpg"
import { pageVariants } from "./Variants";
import { motion } from "framer-motion";

const AboutApp = () => {

    let { about } = useParams();

    return(   
        (()=>{
            if(about=="about-app"){
                return (  
                    <motion.div variants={pageVariants} initial="initial" 
                    animate="animate" exit="exit">
                        <div className="wrapper-image-about">
                            <img src={ssTodo} className="image-about" alt="" />
                        </div>
                        <div className="text-about">
                            Aplikasi ini adalah aplikasi todolist yang dibuat dengan reactJS. Pada aplikasi ini user dapat menambah,menghapus
                            serta mengubah status dari todo yang dimilikinya
                        </div>
                    </motion.div>
                );
            }
            else if(about=="about-author"){
                return (  
                    <motion.div variants={pageVariants} initial="initial" 
                    animate="animate" exit="exit">
                        <div className="wrapper-image-about">
                            <img src={Me} className="image-about" alt="" />
                        </div>
                        <div className="text-about">
                            Hai, Namaku Naufal Ghani. Aku mahasiswa S1 sistem informasi di Universitas Airlangga. Sekarang aku 
                            berada di semester 7 dan sedang mengikuti program mbkm Studi Independen di Alterra Academy. Salam kenal
                            semua
                        </div>
                    </motion.div>
                );
            }
            else{
                return null
            }
        })()
    )

}

export default AboutApp;