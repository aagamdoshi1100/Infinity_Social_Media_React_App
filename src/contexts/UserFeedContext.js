import { createContext, useContext, useEffect, useReducer } from "react";
import UserFeedReducer from "../reducer/UserFeedReducer";

const UserFeedContext = createContext()

export const UserFeedContextProvider=({children})=>{
    const [userFeed,userFeedDispacher] = useReducer(UserFeedReducer,{postsData:[],
    showFiltersUserFeed: false})

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
    return(<UserFeedContext.Provider value={{userFeed,userFeedDispacher}}>{children}</UserFeedContext.Provider>)
}

const useUserFeedContext =()=> useContext(UserFeedContext);
export default useUserFeedContext;