import useUserFeedContext from "../../contexts/UserFeedContext"
import {FaFilter} from "react-icons/fa"
import {AiOutlineLike} from "react-icons/ai"
import "./UserFeed.css"

export default function UserFeed(){
    const {userFeed,userFeedDispacher} = useUserFeedContext()
     
    return(<div className="container">
        <h3>User Feed page</h3>
        <textarea className="myText"></textarea>
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
                    <div className="post-heading">
                    <h3>{username}</h3>
                    <p style={{paddingLeft:"10px",color:"rgb(184, 179, 179)"}}>{createdAt}</p>
                    </div>
                    <p>{content}</p>
                    <img src={`${image}`} height="400px" />
                    <p><AiOutlineLike />{likes.likeCount}</p>
                    </div>)
            })
        }
    </div>)
}