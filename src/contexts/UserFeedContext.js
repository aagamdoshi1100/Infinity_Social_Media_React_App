import { createContext, useContext, useEffect, useReducer } from "react";
import UserFeedReducer from "../reducer/UserFeedReducer";

const UserFeedContext = createContext()

export const UserFeedContextProvider=({children})=>{
    const [userFeed,userFeedDispacher] = useReducer(UserFeedReducer,{postsData:[],
    showFiltersUserFeed: false,
    createPostContent :null,
    createPostImage:null
})

    // const createPostWithImg =(e)=>{
    //     const selectedImage =   
    // }
    console.log(userFeed,"createpost")
    const createPost =async(postText)=>{
        const token = localStorage.getItem("encodedToken")
        const post={
            content:postText
        }
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
    return(<UserFeedContext.Provider value={{userFeed,userFeedDispacher,createPost}}>{children}</UserFeedContext.Provider>)
}

const useUserFeedContext =()=> useContext(UserFeedContext);
export default useUserFeedContext;