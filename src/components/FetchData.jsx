import useUserFeedContext from "../contexts/UserFeedContext"
import useAuthContext from "../contexts/AuthContext"
import {AiOutlineLike} from "react-icons/ai"
import {MdInsertPhoto} from "react-icons/md"
import {BiDotsVertical} from "react-icons/bi"
export default function FetchData(){
    const {userFeed,userFeedDispacher,editHandler,postLikeHandler,deletePostHandler,getSelectedPost} = useUserFeedContext()
    const {user} = useAuthContext();
    const fetchValue = userFeed?.fetchValue;
    return(<div>
        {
            userFeed?.[fetchValue]?.map((details)=>{
                const {_id,username,content,image,createdAt,likes} = details;
                return(<div key={_id} className="FeedBox wd b">
                    <div className="post-heading">
                            <h3>{username}<span style={{paddingLeft:"10px",color:"rgb(184, 179, 179)",fontWeight:"normal"}}>{createdAt}</span></h3>
                            
                        <div className="post-edit-btn">
                            <BiDotsVertical size="1.8em" onClick={()=>userFeedDispacher({type:"THREE_DOT_CONTROLLER",payload:{data:userFeed.showToggleUserFeed, indexOfPost :_id}})} className="heading-menu-item b"/>
                        
                            {userFeed.showToggleUserFeed ? details.username === user.name && userFeed.indexOfPost===_id ?
                            <div>
                            <li onClick={()=>userFeedDispacher({type:"EDIT_CONTROLLER",payload:userFeed.showEditUserFeed})} className="heading-menu-item b">Edit</li>
                            <li className="heading-menu-item b" onClick={()=>deletePostHandler(_id)}>Delete</li>
                        </div>  : 
                            <div>
                            </div>
                            : 
                            null}
                            {userFeed.showToggleUserFeed ? details.username !== user.name && userFeed.indexOfPost===_id ?
                            <div>
                            <li className="heading-menu-item b" onClick={()=>userFeedDispacher({type:"UNFOLLOW_CONTROLLER",payload:userFeed.showEditUserFeed})}>Unfollow</li>
                            <li className="heading-menu-item b">Report</li>
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
                            <p className="pi-c" style={{fontSize:"24px"}} onClick={()=>postLikeHandler(_id,username)}>
                                <AiOutlineLike /> {likes.likeCount} </p>
                </div>)
                        })
                    }
                </div>)
}