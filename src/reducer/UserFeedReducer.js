export const InitialValueFeedContext ={
    postsData:[],
    selectedPostData :[],
    userProfileData :[],
    userProfileView:[],
    fetchValue:"",
    showFiltersUserFeed: false,
    createPostContent :null,
    createPostImage:null,
    filterBy: "",
    showToggleUserFeed:false,
    showEditUserFeed:false,
    indexOfPost:""
}

export default function UserFeedReducer(state,action){
    switch(action.type){
        case "ALL_POSTS":
            return {...state, postsData: action.payload.data, fetchValue:action.payload.value }
        case "SELECTED_POST":
            return {...state, selectedPostData: [action.payload.data], fetchValue:action.payload.value}
        case "USER_PROFILE":
            return {...state,userProfileData:[action.payload.userData],userProfileView:action.payload.data, fetchValue:action.payload.value}
        case "LIKE_STATUS":
            return {...state, postsData: action.payload.data }
        case "SHOW_FILTERS":
            return {...state, showFiltersUserFeed: !action.payload}
        case "THREE_DOT_CONTROLLER":
            return {...state, showToggleUserFeed: !action.payload.data,indexOfPost:action.payload.indexOfPost}
        case "EDIT_CONTROLLER":
                return {...state, showEditUserFeed: !action.payload}        
        case "EDIT_POST_HANDLER":
                return {...state,postsData: action.payload.data, showEditUserFeed: !action.payload.showEditUserFeed, fetchValue:action.payload.value}
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
