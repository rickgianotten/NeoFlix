import Input from "./inputs/Input";
import useQueryParams from "../hooks/useQueryParams";
import { useNavigate,} from "react-router-dom";

export default function SearchBar({searchOpen, setSearchOpen}){

    const navigate = useNavigate();

    const {paramValue, setSearchParams} = useQueryParams('search');

    const search = paramValue || "";

    function handleKeyDown(e){
        const searchParam = new URLSearchParams({search: search})
        if (e.key === 'Enter') navigate(`/movies?${searchParam.toString()}`);
    };

    return <>
    <div className={`overlay ${searchOpen && 'open'}`} onClick={()=>setSearchOpen(false)}></div>
     <Input name='search' type="search" placeholder="search" onChange={(e)=>setSearchParams({search: e.target.value})} value={search} className={searchOpen && 'open'} onKeyDown={handleKeyDown}/>
    </>
}