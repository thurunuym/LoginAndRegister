
import { useNavigate } from "react-router-dom";

function Dashboard(){

    const navigate = useNavigate();

    const handleSummaryNavigation = () =>{
        navigate("/summary");
    }

    return(

        <>
        <h1>Loged in Succesfully.</h1>

        <button onClick={handleSummaryNavigation}>
            summary 
        </button>

        </>
    )
}

export default Dashboard;