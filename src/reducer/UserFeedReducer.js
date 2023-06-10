export default function UserFeedReducer(state,action){
    switch(action.type){
        case "ALL_POSTS":
            return {...state, postsData: action.payload }
        case "SHOW_FILTERS":
            return {...state, showFiltersUserFeed: !action.payload}
        case "SORT_BY_LATEST": 
            return {...state, postsData: action.payload.sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt))}
        case "SORT_BY_OLDEST": 
            return {...state, postsData: action.payload.sort((a,b)=>new Date(a.createdAt) - new Date(b.createdAt))}
        case "SORT_BY_TRENDING": 
            return {...state, postsData: action.payload.sort((a,b)=>b.likes.likeCount - a.likes.likeCount)}
    }
       
}
