import IconButton from "../buttons/IconButton.jsx";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import "../../assets/css/componenten/pagination/pagination.css"

export default function Pagination({page, setSearchParams}){

    return <div className="pagination-wrapper">
        <IconButton onClick={()=>setSearchParams({page: page - 1})} disabled={page <= 1}>
            <IoArrowBackCircleOutline/>
        </IconButton>
        <p style={{color: "white"}}>{page}</p>
        <IconButton onClick={()=>setSearchParams({page: page + 1})}> 
            <IoArrowForwardCircleOutline/>
        </IconButton>
    </div>
}