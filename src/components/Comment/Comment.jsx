import useAuthContext from "../../contexts/AuthContext";
import useFollowContext from "../../contexts/FollowContext"
import { useIconContext } from "../../contexts/IconContext";
import useUserFeedContext from "../../contexts/UserFeedContext";
import "./Comment.css"
export default function Comment(){
    const {infinityUsers,infinityUsersDispacher} = useFollowContext();
    const {userFeed} = useUserFeedContext();
    const {user} = useAuthContext();
    const {AiOutlineDelete}  =useIconContext();
    return(<div className="">
        {
            infinityUsers.comments.filter(({postId})=>postId === userFeed.selectedPostData[0]._id).map((details)=>{
                const {postId,comment,commentBy} = details;
                return(<div className="comment-box b" key={comment}> 
                    <span className="circle">
                    <img src={ infinityUsers.allUsers.find(({username})=>username === commentBy).profileIcon} width="100%" height="100%"/></span><p>{commentBy}</p>
                        {commentBy === user.name ?
                        <AiOutlineDelete size="1.8em" onClick={()=>infinityUsersDispacher({type:"DELETE_COMMENT",payload:comment})}/>
                        : null}
                    <p>{comment}</p>  
                </div>)
            })
        }
    </div>)
}