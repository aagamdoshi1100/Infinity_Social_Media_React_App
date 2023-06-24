import { createContext, useContext } from "react";
import useUserFeedContext from "./UserFeedContext";
import {BiArrowBack,BiLogOut,BiBookBookmark} from "react-icons/bi"
import {MdOutlineExplore} from "react-icons/md"
import {AiOutlineHome} from "react-icons/ai"
import {BiLogIn} from "react-icons/bi"

const IconContext = createContext();

export default function IconContextProvider({children}){
    const {navigate,userFeedDispacher} = useUserFeedContext()
    const goToBookMark =()=>{
        userFeedDispacher({type:"BOOKMARK_PAGE",payload:"bookMarkView"})
        navigate("/pages/bookmark/BookMark")
    }    
    const goToHome =()=>{
        userFeedDispacher({type:"HOME_PAGE",payload:"postsData"})
        navigate("/")
    }
    const goToExplore =()=>{
        userFeedDispacher({type:"EXPLORE_PAGE",payload:"postsData"})
        navigate('/pages/explore/Explore')
        }
    return(<IconContext.Provider value={{goToBookMark,goToHome,goToExplore,BiArrowBack,BiLogOut,BiBookBookmark,MdOutlineExplore,AiOutlineHome,BiLogIn}}>{children}</IconContext.Provider>)
}

export const useIconContext =()=>useContext(IconContext)
