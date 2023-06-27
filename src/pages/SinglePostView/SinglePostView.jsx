import FetchData from "../../components/FetchData/FetchData";
import {BiArrowBack} from "react-icons/bi"
import Footer from "../../components/Footer/Footer";
import { useIconContext } from "../../contexts/IconContext";

export default function SinglePostView(){
    const {goToHome} = useIconContext();

    return( <div>
        <BiArrowBack size="1.8em" className="m-1" onClick={goToHome}/>
       <FetchData />
       <Footer />
    </div>)
}