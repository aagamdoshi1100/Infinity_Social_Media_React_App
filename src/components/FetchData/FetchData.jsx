import useUserFeedContext from "../../contexts/UserFeedContext"
import useAuthContext from "../../contexts/AuthContext"
import "../../App.css"
import "./FetchData.css"
import useFollowContext from "../../contexts/FollowContext"
import { useUserProfileContext } from "../../contexts/UserProfileContext"
import { useIconContext } from "../../contexts/IconContext"
export default function FetchData(){
    const {userFeed,userFeedDispacher,postLikeHandler,deletePostHandler,getSelectedPost,postBookMarkHandler} = useUserFeedContext()
    const {user} = useAuthContext();
    const {infinityUsers,followUser} =useFollowContext();
    console.log("infinityUsers:", infinityUsers)
    const {GoComment,FiBookmark,BiDotsVertical,MdInsertPhoto,AiOutlineLike} = useIconContext();
    const {getUserProfile,editHandler,profile} = useUserProfileContext();
   
    const fetchValue = userFeed?.fetchValue;
return(<div className="mb-12">
    {
    userFeed?.[fetchValue]?.map((details)=>{
    const {_id,username,content,image,createdAt,likes} = details;
    return(<div key={_id} className="FeedBox wd b">
        <div className="post-header">
            <span className="circle" onClick={()=>getUserProfile(infinityUsers?.allUsers?.find((item)=>item.username === username)._id,username)}>
            <img src={username === user.name && profile.userProfileData >1 ? profile.userProfileData[0].profileIcon :
                infinityUsers?.allUsers?.find((item)=>item.username === username).profileIcon} width="100%" height="100%"/></span>
            <div className="fullName">
                <span>{`${infinityUsers?.allUsers?.find((item)=>item.username === username).firstName} ${infinityUsers?.allUsers?.find((item)=>item.username === username).lastName}`}</span>
                <span style={{color:"grey"}}>@{username}</span>
            </div>
            <span style={{color:"rgb(184, 179, 179)"}}>{createdAt}</span>
            <div className="post-edit-btn">
                <BiDotsVertical size="1.8em"  onClick={()=>userFeedDispacher({type:"THREE_DOT_CONTROLLER",payload:{data:userFeed.showToggleUserFeed, indexOfPost :_id}})} className="three-dots b"/>
                       
                {userFeed.showToggleUserFeed ? details.username === user.name && userFeed.indexOfPost===_id ?
                    <div className="heading-menu-item">
                        <li onClick={()=>userFeedDispacher({type:"EDIT_CONTROLLER",payload:userFeed.showEditUserFeed})} >Edit</li>
                        <li onClick={()=>deletePostHandler(_id)}>Delete</li>
                    </div>  : 
                        <div>
                        </div>
                            : 
                            null}
                            {userFeed.showToggleUserFeed ? details.username !== user.name && userFeed.indexOfPost===_id ?
                        <div className="heading-menu-item">
                            {infinityUsers?.followUsers?.includes(details.username) ? 
                            
                            <li onClick={()=>followUser(infinityUsers?.allUsers?.find((item)=>item.username === username)._id)}>Unfollow</li> :


                            <li onClick={()=>followUser(infinityUsers?.allUsers?.find((item)=>item.username === username)._id)}>Follow</li>
                            
                            }
                        </div>  : 
                        <div>
                        </div>
                            : 
                            null}
                        </div>
        </div>
                    <div contentEditable={userFeed.showEditUserFeed ? userFeed.indexOfPost===_id : false}  onClick={()=>getSelectedPost(_id)}>
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
                            <div className="post-footer b jc-sb p">
                            <span>
                            <AiOutlineLike size="1.8em" onClick={()=>postLikeHandler(_id)}/>{likes?.likeCount}</span>
                            <span>
                            <GoComment size="1.8em" />
                            </span>
                            <span>
                            <FiBookmark size="1.8em" onClick={()=>postBookMarkHandler(_id)}/>
                            </span>
                            </div>
                </div>)
                        })
                    }
                </div>)
}