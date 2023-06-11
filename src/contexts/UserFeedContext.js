import { createContext, useContext, useEffect, useReducer } from "react";
import UserFeedReducer from "../reducer/UserFeedReducer";

const UserFeedContext = createContext()

export const UserFeedContextProvider=({children})=>{
    const [userFeed,userFeedDispacher] = useReducer(UserFeedReducer,{postsData:[],
    showFiltersUserFeed: false,
    createPostContent :null,
    createPostImage:null,
    likeStatus: false,
    filterBy: null
})  
console.log(userFeed)
    const token = localStorage.getItem("encodedToken")
    const postLikeHandler =async(postId)=>{
        const URL = userFeed.likeStatus ? `/api/posts/dislike/${postId}` : `/api/posts/like/${postId}`
        try{
            const response = await fetch(URL,{
                method: "POST",
                headers: {authorization:token}
            }) 
            const responseData = await response.json()
            userFeedDispacher({type : "LIKE_STATUS",payload : {data: responseData.posts , status: userFeed.likeStatus}})
        }catch(e){
            console.log("🚀 ~ file: UserFeedContext.js:20 ~ likePost ~ e:", e)
        }
     }
    const createPost =async()=>{
            const post={
            content:userFeed.createPostContent,
            image: URL.createObjectURL(userFeed.createPostImage)
        }
        console.log(post,"post")
        try{
            const response = await fetch("/api/posts",{
                method:"POST",
                headers:{authorization:token},
                body: JSON.stringify({postData:post})
            })
            const responseData = await response.json()
            userFeedDispacher({type : "ALL_POSTS",payload : responseData.posts})
        }catch(e){
            console.log("🚀 ~ file: UserFeedContext.js:17 ~ createPost ~ e:", e)
        }
    }

    const fetchAllPosts =async()=>{
        try{
            const response = await fetch("/api/posts");
            const responseData = await response.json()
            console.log("🚀 ~ file: UserFeedContext.js:11 ~ fetchAllPosts ~ responseData:", responseData)
            userFeedDispacher({type : "ALL_POSTS",payload : responseData.posts})

        }catch(e){
            console.log("🚀 ~ file: UserFeedContext.js:12 ~ fetchAllPosts ~ e:", e)     
        }
    }
    useEffect(()=>{
        fetchAllPosts()
    },[])
    return(<UserFeedContext.Provider value={{userFeed,userFeedDispacher,createPost,postLikeHandler}}>{children}</UserFeedContext.Provider>)
}

const useUserFeedContext =()=> useContext(UserFeedContext);
export default useUserFeedContext;