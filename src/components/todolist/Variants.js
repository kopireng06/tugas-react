export const sidebarVariants = {
    initial : {
        x:'-100%',
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            type: "spring", 
            bounce:0.2,
            when: "beforeChildren",
            staggerChildren: 0.07
        }
    },
    exit:{
        x:'-100%',
        opacity:0,
        transition:{
            when:"afterChildren",
            staggerChildren: 0.07
        }
    }
}

export const linkVariants = {
    initial : {
        y:-30,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1
    },
    exit:{
        y:-30,
        opacity:0
    }
}

export const aboutVariants = {
    initial : {
        x:-30,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1
    },
    exit:{
        x:-30,
        opacity:0
    }
}

export const dangerVariants = {
    initial:{
        y:20,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1
    },
    exit:{
        y:40,
        opacity:0
    }
}