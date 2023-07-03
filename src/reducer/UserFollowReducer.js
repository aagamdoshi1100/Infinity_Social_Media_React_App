export const InitialValueFollowContext={
    allUsers :[],
    followedByLoggedInUser:[],
    followUsers:[],
    isCommentEnabled: false,
    commentValue: "",
    PostcommentId:"",
    commentBy:"",
    comments:[]
}

export const UserFollowReducer =(state,action)=>{
    switch(action.type){
        case "ALL_USERS":
            return {...state, allUsers:action.payload}         
        case "FOLLOW_USER":
            return {...state, followedByLoggedInUser : action.payload.userData , followUsers :[...action.payload.usernames] }
        case "ENABLE_COMMENT":
            return {...state, isCommentEnabled : !action.payload }
        case "CREATE_COMMENT":
            return {...state, commentValue: action.payload.comment, PostcommentId: action.payload.Id, commentBy: action.payload.username }
        case "SAVE_COMMENT":
            return {...state, comments: [...state.comments, {postId: state.PostcommentId, comment:state.commentValue, commentBy:state.commentBy}],isCommentEnabled : !state.isCommentEnabled}
        case "DISCARD_COMMENT":
            return {...state, isCommentEnabled : !state.isCommentEnabled, commentValue: "", PostcommentId:""}
        case "DELETE_COMMENT":
            return {...state, comments: [...state.comments.filter((item)=>item.comment !== action.payload)]}
    }
}