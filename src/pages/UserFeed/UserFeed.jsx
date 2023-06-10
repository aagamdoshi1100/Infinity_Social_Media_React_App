import useUserFeedContext from "../../contexts/UserFeedContext"
import {FaFilter} from "react-icons/fa"
import {AiOutlineLike} from "react-icons/ai"
import "./UserFeed.css"

export default function UserFeed(){
    const {userFeed,userFeedDispacher} = useUserFeedContext()
     
    return(<div>
        <h3>User Feed page</h3>
         <div onClick={()=>userFeedDispacher({type: "SHOW_FILTERS",payload: userFeed.showFiltersUserFeed})}><FaFilter /></div> 
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
                    <h3>{username}</h3>
                    <p>{createdAt}</p>
                    <p>{content}</p>
                    <img src={`${image}`} width="100%" height="400px" />
                    <p><AiOutlineLike />{likes.likeCount}</p>
                    </div>)
            })
        }
    </div>)
}