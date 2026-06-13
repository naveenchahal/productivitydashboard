export default function todoReducer(state,action){

    switch(action.type){
        case "ADD_TODO":
            return [...state,{ id:Date.now(), title:action.payload.trim(), completed:false}]
       case "LOAD_TODOS":
            return action.payload
        case "DELETE_TODO":
            return state.filter((todo)=>todo.id!==action.payload)
        case "TOGGLE_COMPLETE":
            return state.map((todo)=>{
                if(todo.id===action.payload){
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        case "UPDATE_TODO":
            return state.map((todo)=>{
                if(todo.id===action.payload.id){
                    return {...todo,title:action.payload.title}
                }
                return todo
            })
        default:
            return state
    }
}