export const initialNewsState = {
    dataNews: [],
    finished:false,
    param:"pandemic"
}

export const newsReducer = (state,action) =>{
    switch(action.type){
        case 'get_data_news':
            console.log("masokl")
            return {
                ...state,
                dataNews:action.dataNews,
            }
        case 'change_finished':
            return {
                ...state,
                finished:!state.finished
            }
        case 'change_param':
            return {
                ...state,
                param:action.param
            }
        default:
            return state
    }
}