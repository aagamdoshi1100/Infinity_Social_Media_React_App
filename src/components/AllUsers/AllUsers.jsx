import useAuthContext from "../../contexts/AuthContext";
import useFollowContext from "../../contexts/FollowContext";
import useUserFeedContext from "../../contexts/UserFeedContext";
import "./AllUsers.css"

export default function AllUsers(){
    const {infinityUsers,followUser} = useFollowContext();
    const {userFeed} = useUserFeedContext();
    const {user} = useAuthContext();
    return(<div className="allUsers">
                {infinityUsers?.allUsers.filter(({username})=>username !== user.name).map((details)=>{
            const {_id,profileIcon,firstName,lastName,username} = details;
            return(<div className="userBox" key={_id}>
                <span className="circle"><img src={profileIcon} width="100%" height="100%"/></span>
                <h4>{`${firstName} ${lastName}`}</h4>
                <p className="username">{`@${username}`}</p>
            {
                userFeed?.followedUsers.find((item)=>item ===username) ? <button className="btn br" onClick={()=>followUser(_id)}>UnFollow</button>  : <button className="btn br" onClick={()=>followUser(_id)}>Follow</button> 
            }
            </div>)
        })}
    </div>)
}