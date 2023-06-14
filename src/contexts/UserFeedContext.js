import { createContext, useContext, useEffect, useReducer } from "react";
import UserFeedReducer from "../reducer/UserFeedReducer";
import useAuthContext from "./AuthContext";
import { json } from "react-router-dom";

const UserFeedContext = createContext()

export const UserFeedContextProvider=({children})=>{
    const [userFeed,userFeedDispacher] = useReducer(UserFeedReducer,{postsData:[],
    showFiltersUserFeed: false,
    createPostContent :null,
    createPostImage:null,
    filterBy: "",
    showToggleUserFeed:false,
    showEditUserFeed:false,
    indexOfPost:""
})  
console.log(userFeed,"aaa")
const token = localStorage.getItem("encodedToken")

const editHandler = async(postId)=>{
    const post={
        content:userFeed.createPostContent,
        image:userFeed.createPostImage === null ||userFeed.createPostImage === undefined  ? "": URL.createObjectURL(userFeed.createPostImage)
    }
    try{
        const response = await fetch(`/api/posts/edit/${postId}`,{
            method:"POST",
            headers:{authorization:token},
            body: JSON.stringify({postData:post})
        })
        const responseData = await response.json()
        console.log("🚀 ~ file: UserFeedContext.js:33 ~ editHandler ~ responseData:", responseData)
        userFeedDispacher({type : "EDIT_POST_HANDLER",payload :{data: responseData.posts,showEditUserFeed : userFeed.showEditUserFeed}})
    }catch(e){
    console.log("🚀 ~ file: UserFeedContext.js:32 ~ editHandler ~ e:", e)
    }
}

const postLikeHandler =async(postId,user)=>{

    // const st=userFeed.postsData.find(({_id})=>postId === _id)
    // if(st.likes.likedBy.length>0){
    // const likest = st.likes.likedBy.find(({username})=>username == user)
    // console.log(likest,"likest")
    // }
    if(!userFeed.postData){
        try{
            const response = await fetch(`/api/posts/like/${postId}`,{
                method: "POST",
                headers: {authorization:token}
            }) 
            const responseData = await response.json()
            console.log("🚀 ~ file: UserFeedContext.js:30 ~ postLikeHandler ~ responseData:", response)
                if(response.status === 201){
                    userFeedDispacher({type : "LIKE_STATUS",payload : {data: responseData.posts
                    }})
                 }else{
                    try{
                        const responsedislike = await fetch(`/api/posts/dislike/${postId}`,{
                            method: "POST",
                            headers: {authorization:token}}) 
                            const responseDisData = await responsedislike.json()
                            userFeedDispacher({type : "LIKE_STATUS",payload : {data: responseDisData.posts}})
                    }catch(e){
                        console.log("400 erro code", e)
                    }
                }
        }catch(e){
            console.log("🚀 ~ file: UserFeedContext.js:20 ~ likePost ~ e:", e)
        }
    }
     }
    const createPost =async()=>{
            const post={
            content:userFeed.createPostContent,
            image: userFeed.createPostImage === null ||userFeed.createPostImage === undefined  ? "": URL.createObjectURL(userFeed.createPostImage)
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
    return(<UserFeedContext.Provider value={{userFeed,userFeedDispacher,createPost,postLikeHandler,editHandler}}>{children}</UserFeedContext.Provider>)
}

const useUserFeedContext =()=> useContext(UserFeedContext);
export default useUserFeedContext;