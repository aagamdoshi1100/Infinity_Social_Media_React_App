import FetchData from "../../components/FetchData/FetchData";
import Footer from "../../components/Footer/Footer";
import { useIconContext } from "../../contexts/IconContext";

export default function Explore(){
    const {goToHome,BiArrowBack} = useIconContext()
    return(<div>
        <BiArrowBack size="1.7em" onClick={goToHome}/>
        <FetchData />
        <Footer />
    </div>)
}