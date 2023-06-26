export const InitialValueFollowContext={
    allUsers :[],
    followedByLoggedInUser:[],
}

export const UserFollowReducer =(state,action)=>{
    switch(action.type){
        case "ALL_USERS":
            return {...state, allUsers:action.payload}         
        case "FOLLOW_USER":
            return {...state, followedByLoggedInUser : action.payload }
    }
}