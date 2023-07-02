import FetchData from "../../components/FetchData/FetchData";
import Footer from "../../components/Footer/Footer";
import { useIconContext } from "../../contexts/IconContext";
import {BiArrowBack} from "react-icons/bi"
import "./BookMark.css"

export default function BookMark(){
    const {goToHome} = useIconContext()
    return(<div>
        <div className="bookMark-header"><BiArrowBack size="1.7em" onClick={goToHome}/><h2>BookMark</h2></div>
        <div className="container">
        <FetchData />
        </div>
        <Footer />
    </div>)
}
