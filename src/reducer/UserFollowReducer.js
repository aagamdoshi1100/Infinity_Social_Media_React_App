export const InitialValueFollowContext={
    allUsers :[],
    followDetailsOfLoggedInUser:[],
}

export const UserFollowReducer =(state,action)=>{
    switch(action.type){
        case "ALL_USERS":
            return {...state, allUsers:action.payload}         
        case "FOLLOW_USER":
            return {...state, followDetailsOfLoggedInUser : action.payload }
    }
}