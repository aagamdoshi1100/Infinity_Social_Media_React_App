import useUserFeedContext from "../../contexts/UserFeedContext"
import {NavLink} from "react-router-dom"
import useAuthContext from "../../contexts/AuthContext"
import "./UserFeed.css"
import {FaFilter} from "react-icons/fa"
import {AiOutlineLike} from "react-icons/ai"
import {MdInsertPhoto} from "react-icons/md"
 

export default function UserFeed(){
    const {userFeed,userFeedDispacher,createPost,createPostWithImg,postLikeHandler} = useUserFeedContext()
    const {loginHandler,user} = useAuthContext();
 
     
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
            userFeed?.postsData.map((details)=>{
                const {_id,username,content,image,createdAt,likes
                } = details;
                return(<div key={_id} className="FeedBox">
                    <div className="post-heading">
                    <h3>{username}</h3>
                    <p style={{paddingLeft:"10px",color:"rgb(184, 179, 179)"}}>{createdAt}</p>
                    </div>
                    <p>{content}</p>
                    {!image ? null :<img src={`${image}`} height="400px" />}
                    <p onClick={()=>postLikeHandler(_id,username)}><AiOutlineLike />{likes.likeCount}</p>
                    </div>)
            })
        }
    </div>)
}