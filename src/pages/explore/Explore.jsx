import FetchData from "../../components/FetchData/FetchData";
import Footer from "../../components/Footer/Footer";
import { useIconContext } from "../../contexts/IconContext";
import "./Explore.css"

export default function Explore(){
    const {goToHome,BiArrowBack} = useIconContext()
    return(<div>
        <div className="explore-header"><BiArrowBack size="1.7em" onClick={goToHome}/><h2>Explore</h2></div>
        <div className="container">
        <FetchData />
        </div>
        <Footer />
    </div>)
}