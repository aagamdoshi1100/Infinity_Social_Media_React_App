export default function UserFeedReducer(state,action){
    switch(action.type){
        case "ALL_POSTS":
            return {...state, postsData: action.payload }
        case "LIKE_STATUS":
            return {...state, postsData: action.payload.data, likeStatus: !action.payload.status }
        case "SHOW_FILTERS":
            return {...state, showFiltersUserFeed: !action.payload}
        case "SORT_BY_LATEST": 
            return {...state, postsData: action.payload.sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt)),filterBy:"Latest Posts"}
        case "SORT_BY_OLDEST": 
            return {...state, postsData: action.payload.sort((a,b)=>new Date(a.createdAt) - new Date(b.createdAt)),filterBy:"Oldest Posts"}
        case "SORT_BY_TRENDING": 
            return {...state, postsData: action.payload.sort((a,b)=>b.likes.likeCount - a.likes.likeCount),filterBy:"Trending Posts"}
        case "CREATE_POST_IMAGE":
            return {...state, createPostImage: action.payload}        
        case "CREATE_POST_CONTENT":
            return {...state, createPostContent: action.payload}
    }
       
}
