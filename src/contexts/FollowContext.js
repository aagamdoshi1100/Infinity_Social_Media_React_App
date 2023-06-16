import { createContext, useContext, useEffect, useReducer } from "react";
import {InitialValueFollowContext,UserFollowReducer} from "../reducer/UserFollowReducer"
const FollowContext = createContext();

export const FollowContextProvider =({children})=>{
    const [infinityUsers,infinityUsersDispacher] = useReducer(UserFollowReducer, InitialValueFollowContext)
    console.log(infinityUsers,"aaaa")
    const token = localStorage.getItem("encodedToken")
    const followUser =async(followUserId)=>{
        try{
            const response = await fetch(`/api/users/follow/${followUserId}`,{
                method:"POST",
                headers: {authorization: token}
            })
            const responseData = await response.json();
            if(response.status===200){
                infinityUsersDispacher({type:"FOLLOW_USER",payload:responseData.user.following})
            }
            if(response.status ===400){
                try{
                    const responseError = await fetch(`/api/users/unfollow/${followUserId}`,{
                        method:"POST",
                        headers: {authorization: token}
                    })   
                    const responseErrorData = await responseError.json();
                    infinityUsersDispacher({type:"FOLLOW_USER",payload:responseErrorData.user.following})

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