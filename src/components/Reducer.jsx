const initialState = {
    tasks: []
}

const Reducer = (state = initialState,action) => {
    switch(action.type){
        case 'Add':
            return { ...state, tasks:[...state.tasks,{text:action.payload, done:false}]}
        // case 'Remove':
        //     return { ...state }
        default:
            return state;
    }
}

export default Reducer