import useUserFeedContext from "../../contexts/UserFeedContext"
import useAuthContext from "../../contexts/AuthContext"
import "./UserFeed.css"
import "../../App.css"
import useFollowContext from "../../contexts/FollowContext"
import FetchData from "../../components/FetchData/FetchData"
import Footer from "../../components/Footer/Footer"
import Heading from "../../components/Header/Heading"
import Filters from "../../components/Filters/Filters"
import { useIconContext } from "../../contexts/IconContext"

 
export default function UserFeed(){
    const {userFeed,userFeedDispacher,createPost} = useUserFeedContext()
    console.log("UserFeed.jsx:15   UserFeed  userFeed:", userFeed)
    const {user} = useAuthContext();
    const {infinityUsers,followUser} = useFollowContext();
    const {MdInsertPhoto,SlUserFollow} = useIconContext();
   // console.log(" infinityUsers:", infinityUsers)
     
    return(<div className="container">
    <Heading />
    <div className="container-body">
    <div className="create-post">
            <textarea className="myText" onChange={(e)=>userFeedDispacher({type:"CREATE_POST_CONTENT",payload:e.target.value})} placeholder="Write something..." ></textarea>
        <div className="create-post-controls">
            <div className="image-box">
                <img src={userFeed.createPostImage === null || userFeed.createPostImage === undefined  ? "" : `${URL.createObjectURL(userFeed.createPostImage)}` } onClick={()=>userFeedDispacher({type:"PREVIEW",payload: userFeed.previewUploadedImage})}/>
            </div>
            <div className="btn-imgpicker">
                <label htmlFor="image">
                        <MdInsertPhoto size="1.9em"/>
                </label>
                <input type="file" id="image" style={{display:"none",visibility:"none"}} onChange={(e)=>userFeedDispacher({type:"CREATE_POST_IMAGE",payload:e.target.files[0]})}/>
                <button className="btn-post" onClick={createPost}>Create Post</button>
            </div>
            {userFeed.previewUploadedImage ? 
            <div className="preview-post b br">
                <h3>Post preview</h3>
                <p>{userFeed?.createPostContent}</p>
                <img src={userFeed.createPostImage === null || userFeed.createPostImage === undefined  ? "" : `${URL.createObjectURL(userFeed.createPostImage)}` } />
                <button onClick={createPost}>Post</button>
                <button onClick={()=>userFeedDispacher({type:"PREVIEW",payload: userFeed.previewUploadedImage})}>Discard</button>
            </div> : null 
            }
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
                infinityUsers?.followedByLoggedInUser.find((item)=>item.username ===username) ? <button className="btn br" onClick={()=>followUser(_id)}>UnFollow</button>  : <button className="btn br" onClick={()=>followUser(_id)}>Follow</button> 
            }
            </div>)
        })}
    </div>
        
        {infinityUsers.followUsers.length > 0 ? 
        <div>
        <Filters />
        <FetchData /> 
        </div>
        : <p style={{fontSize:"20px"}}><span><SlUserFollow /></span>Please follow users to see posts</p>}    
        </div>
        <Footer />
    </div>)
}