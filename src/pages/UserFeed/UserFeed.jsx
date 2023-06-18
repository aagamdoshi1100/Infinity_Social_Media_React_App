import useUserFeedContext from "../../contexts/UserFeedContext"
import {NavLink} from "react-router-dom"
import useAuthContext from "../../contexts/AuthContext"
import "./UserFeed.css"
import "../../App.css"
import {FaFilter} from "react-icons/fa"
import {MdInsertPhoto} from "react-icons/md"
import useFollowContext from "../../contexts/FollowContext"
import FetchData from "../../components/FetchData"
 

export default function UserFeed(){
    const {userFeed,userFeedDispacher,createPost} = useUserFeedContext()
    const {loginHandler,user} = useAuthContext();
    const {infinityUsers,followUser} = useFollowContext()
     
    return(<div className="container">
        <h3>User Feed page<NavLink onClick={()=>loginHandler("AD","AD123")}>{localStorage.getItem("encodedToken") ? `Welcome, ${user.name}` : "Guest Login"}</NavLink></h3>

    <div className="create-post">
        <textarea className="myText" onChange={(e)=>userFeedDispacher({type:"CREATE_POST_CONTENT",payload:e.target.value})} placeholder="Write something..." ></textarea>
        <div className="btn-imagePicker-filterBox">
            <label htmlFor="image">
                    <MdInsertPhoto size="1.4em" />
            </label>
            <input type="file" id="image" style={{display:"none",visibility:"none"}} onChange={(e)=>userFeedDispacher({type:"CREATE_POST_IMAGE",payload:e.target.files[0]})}/>
            <button className="btn br" onClick={createPost}>Create Post</button>
        </div>
    </div>

    <div className="df mt-1 ox ">
        {infinityUsers?.allUsers.filter(({username})=>username !== user.name).map((details)=>{
            const {_id,profileIcon,firstName,lastName,username} = details;
            return(<div className="b ml-1 br wd-1 h show-user df fd-col jc-sa" key={_id}>
                <span className="circle"><img src={profileIcon} width="100%" height="100%"/></span>
                <h4>{`${firstName} ${lastName}`}</h4>
                <p>{`@${username}`}</p>
            {
                infinityUsers?.followDetailsOfLoggedInUser.find((item)=>item.username ===username) ? <button className="btn br" onClick={()=>followUser(_id)}>UnFollow</button>  : <button className="btn br" onClick={()=>followUser(_id)}>Follow</button> 
            }
            </div>)
        })}
    </div>

         <div className="filterBox">
            <p className="heading-filterbox">{userFeed.filterBy}</p>
            <FaFilter  onClick={()=>userFeedDispacher({type: "SHOW_FILTERS",payload: userFeed.showFiltersUserFeed})}/>
        </div> 
        {userFeed.showFiltersUserFeed ? 
            <div>
                <ul>
                    <li onClick={()=>userFeedDispacher({type : "SORT_BY_TRENDING", payload: [...userFeed.postsData] })}>Trending</li>
                    <li onClick={()=>userFeedDispacher({type : "SORT_BY_LATEST", payload: [...userFeed.postsData] })}>Latest</li>
                    <li onClick={()=>userFeedDispacher({type : "SORT_BY_OLDEST", payload: [...userFeed.postsData]})}>Oldest</li>
                </ul>
            </div> : null
        }
        <FetchData />
    </div>)
}