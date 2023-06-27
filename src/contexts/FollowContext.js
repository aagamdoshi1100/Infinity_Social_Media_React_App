import { createContext, useContext, useEffect, useReducer } from "react";
import {InitialValueFollowContext,UserFollowReducer} from "../reducer/UserFollowReducer"
import useUserFeedContext from "./UserFeedContext";
const FollowContext = createContext();

export const FollowContextProvider =({children})=>{
    const [infinityUsers,infinityUsersDispacher] = useReducer(UserFollowReducer, InitialValueFollowContext)
    const {userFeedDispacher} = useUserFeedContext();
    const token = localStorage.getItem("encodedToken")
    const followUser =async(followUserId)=>{
        try{
            const response = await fetch(`/api/users/follow/${followUserId}`,{
                method:"POST",
                headers: {authorization: token}
            })
            const responseData = await response.json();
 
            if(response.status===200){
                const followingUsers = [...infinityUsers.followUsers,responseData.followUser.username]
                infinityUsersDispacher({type:"FOLLOW_USER",payload:{userData: responseData.user.following, usernames:followingUsers}})
                userFeedDispacher({type:"FOLLOW_USER",payload:{allFollowingUsers:followingUsers,value :"followedUserPosts"}})
            }
            if(response.status ===400){
                try{
                    const responseError = await fetch(`/api/users/unfollow/${followUserId}`,{
                        method:"POST",
                        headers: {authorization: token}
                    })   
                    const responseErrorData = await responseError.json();
                    const unfollowingUserRemoved = infinityUsers.followUsers.filter((user)=> user !== responseErrorData.followUser.username)
                    infinityUsersDispacher({type:"FOLLOW_USER",payload:{userData: responseErrorData.user.following,usernames: unfollowingUserRemoved}})
                    userFeedDispacher({type:"FOLLOW_USER",payload:{allFollowingUsers:unfollowingUserRemoved,value :"followedUserPosts"}})
                }catch(e){
                    console.log("🚀 ~ file: FollowContext.js:27 ~ followUser ~ e:", e)
                }
            }  
        }catch(e){
            console.log("🚀 ~ file: FollowContext.js:15 ~ followUser ~ e:", e)

        }
}
    const fetchInfinityUsers =async()=>{
        try{
            const response = await fetch(`/api/users`)
            const responseData = await response.json();
            infinityUsersDispacher({type:"ALL_USERS",payload:responseData.users})            
        }catch(e){
            console.log("🚀 ~ file: FollowContext.js:13 ~ fetchInfinityUsers ~ e:", e)
        }
    }
useEffect(()=>{
    fetchInfinityUsers()
},[])
    return(<FollowContext.Provider value={{infinityUsers,followUser}}>{children}</FollowContext.Provider>)
}

const useFollowContext =()=> useContext(FollowContext)
export default useFollowContext;