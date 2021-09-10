import { useParams } from "react-router";
import ssTodo from "../../foto/ss-todo.PNG"
import Me from "../../foto/naufal.jpg"
import { AnimatePresence,motion } from "framer-motion";
import { aboutVariants } from "./Variants";
import { Component } from "react";

const AboutApp = () => {

    let { about } = useParams();

    return(
        <AnimatePresence>
            {
                (()=>{
                    if(about=="about-app"){
                        return (  
                            <>
                                <motion.div key="image" variants={aboutVariants} animate="animate" initial="initial" exit="exit" className="wrapper-image-about">
                                    <img src={ssTodo} className="image-about" alt="" />
                                </motion.div>
                                <motion.div key="content" variants={aboutVariants} animate="animate" initial="initial" exit="exit" className="text-about">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus, aut voluptates 
                                    odit nemo blanditiis deserunt iste. Iste ut assumenda 
                                    exercitationem dolorum neque! Cupiditate recusandae cum corrupti! Facilis, asperiores aliquid.
                                </motion.div>
                            </>
                        );
                    }
                    else if(about=="about-author"){
                        return (  
                            <>
                                <div className="wrapper-image-about">
                                    <img src={Me} className="image-about" alt="" />
                                </div>
                                <div className="text-about">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus, aut voluptates 
                                    odit nemo blanditiis deserunt iste. Iste ut assumenda 
                                    exercitationem dolorum neque! Cupiditate recusandae cum corrupti! Facilis, asperiores aliquid.
                                </div>
                            </>
                        );
                    }
                })()
            }
        </AnimatePresence>
    )

}

export default AboutApp;