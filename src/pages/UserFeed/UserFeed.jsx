import useUserFeedContext from "../../contexts/UserFeedContext"
import {NavLink} from "react-router-dom"
import useAuthContext from "../../contexts/AuthContext"
import "./UserFeed.css"
import {FaFilter} from "react-icons/fa"
import {AiOutlineLike} from "react-icons/ai"
import {MdInsertPhoto} from "react-icons/md"
import {BiDotsVertical} from "react-icons/bi"
import useFollowContext from "../../contexts/FollowContext"
 

export default function UserFeed(){
    const {userFeed,userFeedDispacher,createPost,editHandler,postLikeHandler,deletePostHandler} = useUserFeedContext()
    const {loginHandler,user} = useAuthContext();
    const {infinityUsers,followUser} = useFollowContext()
     
    return(<div className="container">
        <h3>User Feed page<NavLink onClick={()=>loginHandler("AD","AD123")}>{localStorage.getItem("encodedToken") ? `Welcome, ${user.name}` : "Guest Login"}</NavLink></h3>

    <div className="create-post">
        <textarea className="myText" onChange={(e)=>userFeedDispacher({type:"CREATE_POST_CONTENT",payload:e.target.value})} placeholder="Write something..." ></textarea>
        {/* {!userFeed.createPostImage ? null : <img src={userFeed.createPostImage} width="100px" height="100px"/>} */}
        <div className="btn-imagePicker-filterBox">
            <label htmlFor="image">
                    <MdInsertPhoto size="1.4em" />
            </label>
            <input type="file" id="image" style={{display:"none",visibility:"none"}} onChange={(e)=>userFeedDispacher({type:"CREATE_POST_IMAGE",payload:e.target.files[0]})}/>
            <button className="btn" onClick={createPost}>Create Post</button>
        </div>
    </div>

    <div className="show-users">
        {infinityUsers?.allUsers.filter(({username})=>username !== user.name).map((details,index)=>{
            const {_id,firstName,lastName,username} = details;
            return(<div className="userbox" key={_id}>
                <h4>{`${firstName} ${lastName}`}</h4>
                <p>{`@${username}`}</p>
            {
                infinityUsers?.followDetailsOfLoggedInUser.find((item)=>item.username ===username) ? <button onClick={()=>followUser(_id)}>UnFollow</button>  : <button onClick={()=>followUser(_id)}>Follow</button> 
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
{
    userFeed?.postsData.map((details,index)=>{
    const {_id,username,content,image,createdAt,likes} = details;
    return(<div key={_id} className="FeedBox">
        <div className="post-heading">
            {/* <div className="post-username-date"> */}
                <h3>{username}<span style={{paddingLeft:"10px",color:"rgb(184, 179, 179)",fontWeight:"normal"}}>{createdAt}</span></h3>
                
            <div className="post-edit-btn">
                <BiDotsVertical size="1.8em" onClick={()=>userFeedDispacher({type:"THREE_DOT_CONTROLLER",payload:{data:userFeed.showToggleUserFeed, indexOfPost :_id}})} className="heading-menu-item"/>
            
                {userFeed.showToggleUserFeed ? details.username === user.name && userFeed.indexOfPost===_id ?
                <div>
                <li onClick={()=>userFeedDispacher({type:"EDIT_CONTROLLER",payload:userFeed.showEditUserFeed})} className="heading-menu-item">Edit</li>
                <li className="heading-menu-item" onClick={()=>deletePostHandler(_id)}>Delete</li>
            </div>  : 
                <div>
                </div>
                : 
                null}
                {userFeed.showToggleUserFeed ? details.username !== user.name && userFeed.indexOfPost===_id ?
                <div>
                <li className="heading-menu-item" onClick={()=>userFeedDispacher({type:"UNFOLLOW_CONTROLLER",payload:userFeed.showEditUserFeed})}>Unfollow</li>
                <li className="heading-menu-item">Report</li>
            </div>  : 
                <div>
                </div>
                : 
                null}
                </div>
        </div>
        <div contentEditable={userFeed.showEditUserFeed ? userFeed.indexOfPost===_id : false} >
            {userFeed.showEditUserFeed && userFeed.indexOfPost===_id ?
            <input onChange={(e)=>userFeedDispacher({type:"CREATE_POST_CONTENT",payload:e.target.value})}/> : <p>{content}</p>}
                {!image ? null :<img src={`${image}`} height="400px" />}
                {userFeed.showEditUserFeed ? 
                <div className="btn-imagePicker-filterBox">
            <label htmlFor="image">
                    <MdInsertPhoto size="1.4em" />
            </label>
            <input type="file" id="image" style={{display:"none",visibility:"none"}} onChange={(e)=>userFeedDispacher({type:"CREATE_POST_IMAGE",payload:e.target.files[0]})}/>
            <button onClick={()=>editHandler(_id)} className="btn">Save</button>
        </div> : ""}
        </div>         
                <p onClick={()=>postLikeHandler(_id,username)}>
                    <AiOutlineLike size="1.8em" />{likes.likeCount}
                </p>
    </div>)
            })
        }
    </div>)
}