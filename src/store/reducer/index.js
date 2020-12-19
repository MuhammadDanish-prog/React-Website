const INITIAL_STATE={
    users: [{
        name:"Muhammad Danish",
        email:"danosh@gmail.com"
    }
]
    
}

export default (state = INITIAL_STATE,action)=>{
    switch (action.type){
        case "SETDATA":
            return({
                ...state,
                users: [...state.users,action.user]
            })
            default:
                return state;
    }

}