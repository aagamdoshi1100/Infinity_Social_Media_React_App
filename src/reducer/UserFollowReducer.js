export const InitialValueFollowContext={
    allUsers :[],
    followedByLoggedInUser:[],
    followUsers:[]
}

export const UserFollowReducer =(state,action)=>{
    switch(action.type){
        case "ALL_USERS":
            return {...state, allUsers:action.payload}         
        case "FOLLOW_USER":
            return {...state, followedByLoggedInUser : action.payload.userData , followUsers :[...action.payload.usernames] }
        case "AUTO_LOGGED_IN_USER":
            return { ...state,followUsers:[...state.followUsers, action.payload]}
    }
}