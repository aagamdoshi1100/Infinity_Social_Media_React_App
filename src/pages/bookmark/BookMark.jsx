import FetchData from "../../components/FetchData/FetchData";
import Footer from "../../components/Footer/Footer";
import { useIconContext } from "../../contexts/IconContext";
import {BiArrowBack} from "react-icons/bi"

export default function BookMark(){
    const {goToHome} = useIconContext()
    return(<div>
        <BiArrowBack size="1.7em" onClick={goToHome}/>
        <FetchData />
        <Footer />
    </div>)
}