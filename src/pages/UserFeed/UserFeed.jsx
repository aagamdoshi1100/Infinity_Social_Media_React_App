import useUserFeedContext from "../../contexts/UserFeedContext"
import useAuthContext from "../../contexts/AuthContext"
import "./UserFeed.css"
import "../../App.css"
import {FaFilter} from "react-icons/fa"
import {MdInsertPhoto} from "react-icons/md"
import useFollowContext from "../../contexts/FollowContext"
import FetchData from "../../components/FetchData/FetchData"
import Footer from "../../components/Footer/Footer"
import Heading from "../../components/Header/Heading"

 
export default function UserFeed(){
    const {userFeed,userFeedDispacher,createPost} = useUserFeedContext()
    const {user} = useAuthContext();
    const {infinityUsers,followUser} = useFollowContext()
     
    return(<div className="container">
    <Heading />
    <div className="container-body">
    <div className="create-post">
        <textarea className="myText" onChange={(e)=>userFeedDispacher({type:"CREATE_POST_CONTENT",payload:e.target.value})} placeholder="Write something..." ></textarea>
        <div className="btn-imagePicker-filterBox">
            <label htmlFor="image">
                    <MdInsertPhoto size="1.9em" />
            </label>
            <input type="file" id="image" style={{display:"none",visibility:"none"}} onChange={(e)=>userFeedDispacher({type:"CREATE_POST_IMAGE",payload:e.target.files[0]})}/>
            <button className="btn br" onClick={createPost}>Create Post</button>
        </div>
    </div>

    <div className="allUsers">
        {infinityUsers?.allUsers.filter(({username})=>username !== user.name).map((details)=>{
            const {_id,profileIcon,firstName,lastName,username} = details;
            return(<div className="userBox" key={_id}>
                <span className="circle"><img src={profileIcon} width="100%" height="100%"/></span>
                <h4>{`${firstName} ${lastName}`}</h4>
                <p className="username">{`@${username}`}</p>
            {
                infinityUsers?.followDetailsOfLoggedInUser.find((item)=>item.username ===username) ? <button className="btn br" onClick={()=>followUser(_id)}>UnFollow</button>  : <button className="btn br" onClick={()=>followUser(_id)}>Follow</button> 
            }
            </div>)
        })}
    </div>

         <div className="filterBox">
            <p className="heading-filterbox">{userFeed.filterBy}</p>
            <FaFilter className="filterBox-icon" onClick={()=>userFeedDispacher({type: "SHOW_FILTERS",payload: userFeed.showFiltersUserFeed})}/>
          
        {userFeed.showFiltersUserFeed ? 
            <div className="filterBox-types">
                    <span onClick={()=>userFeedDispacher({type : "SORT_BY_TRENDING", payload: [...userFeed.postsData] })}>Trending</span>
                    <p onClick={()=>userFeedDispacher({type : "SORT_BY_LATEST", payload: [...userFeed.postsData] })}>Latest</p>
                    <span onClick={()=>userFeedDispacher({type : "SORT_BY_OLDEST", payload: [...userFeed.postsData]})}>Oldest</span>
                
            </div> : null
        }</div>
        <FetchData />
        </div>
        <Footer />
    </div>)
}