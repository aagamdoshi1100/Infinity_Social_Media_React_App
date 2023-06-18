import { createContext, useContext, useEffect, useReducer } from "react";
import UserFeedReducer,{InitialValueFeedContext} from "../reducer/UserFeedReducer";
import { useNavigate } from "react-router-dom";
const UserFeedContext = createContext()

export const UserFeedContextProvider=({children})=>{
    const [userFeed,userFeedDispacher] = useReducer(UserFeedReducer,InitialValueFeedContext)  
    console.log(userFeed,"userfeed")
const token = localStorage.getItem("encodedToken")
const navigate = useNavigate()
const getSelectedPost= async(postId)=>{
    try{
        const response = await fetch(`/api/posts/${postId}`)
        const responseData = await response.json();
        userFeedDispacher({type:"SELECTED_POST",payload:{data:responseData.post,value:"selectedPostData"}})
        navigate("/pages/SinglePostView/")
    }catch(e){
        console.log("🚀 ~ file: UserFeedContext.js:25 ~ getSelectedPost ~ e:", e)
    }
}
const getUserProfile =async(userId,username)=>{
    console.log(userId,username)
    try{
        const response = await fetch(`/api/users/${userId}`)
        const responseData = await response.json();
        console.log("🚀 ~ file: AuthContext.js:25 ~ getUserProfile ~ responseData:", responseData)
        const filtered = userFeed.postsData.filter((posts)=>posts.username === username)
        console.log("🚀 ~ file: UserFeedContext.js:29 ~ getUserProfile ~ filtered:", filtered)
        userFeedDispacher({type:"USER_PROFILE",payload:{userData:responseData.user, data:filtered, value:"userProfileView"}})
        navigate(`/pages/profile/UserProfile`)
    }catch(e){
    console.log("🚀 ~ file: AuthContext.js:27 ~ getUserProfile ~ e:", e)

    }
}
 const deletePostHandler =async(postId)=>{
    try{
        const response = await fetch(`/api/posts/${postId}`,{
            method:"DELETE",
            headers:{authorization:token},
        })
        const responseData = await response.json()
        console.log("🚀 ~ file: UserFeedContext.js:33 ~ editHandler ~ responseData:", responseData)
        userFeedDispacher({type : "ALL_POSTS",payload : {data:responseData.posts,value:"postsData"}})
    }catch(e){
    console.log("🚀 ~ file: UserFeedContext.js:32 ~ editHandler ~ e:", e)
    }
 }
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
        userFeedDispacher({type : "EDIT_POST_HANDLER",payload :{data: responseData.posts,showEditUserFeed : userFeed.showEditUserFeed,value:"postsData"}})
    }catch(e){
    console.log("🚀 ~ file: UserFeedContext.js:32 ~ editHandler ~ e:", e)
    }
}

const postLikeHandler =async(postId,user)=>{
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
            userFeedDispacher({type : "ALL_POSTS",payload :{data: responseData.posts,value:"postsData"}})
        }catch(e){
            console.log("🚀 ~ file: UserFeedContext.js:12 ~ fetchAllPosts ~ e:", e)     
        }
    }
    useEffect(()=>{
        fetchAllPosts()
    },[])
    return(<UserFeedContext.Provider value={{userFeed,userFeedDispacher,createPost,postLikeHandler,editHandler,deletePostHandler,getSelectedPost,navigate,getUserProfile}}>{children}</UserFeedContext.Provider>)
}

const useUserFeedContext =()=> useContext(UserFeedContext);
export default useUserFeedContext;