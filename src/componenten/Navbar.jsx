import navbarLinks from "../data/navbarLinks.js";
import {NavLink} from "react-router-dom";
import "../assets/css/componenten/navbar.css";
import SearchBar from "./SearchBar.jsx";
import IconButton from "./buttons/IconButton.jsx";
import {IoIosSearch, IoIosClose } from "react-icons/io";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery.jsx";
import { useEffect } from "react";
export default function Navbar({className, setOpen}){

    const matches = useMediaQuery('(max-width: 800px)')

    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(()=>{
        if(matches) setSearchOpen(false);

        function handleKeyDown(e){
            if(e.key == "Escape"){
                setSearchOpen(false);
            }
        };
        
        window.addEventListener('keydown', handleKeyDown)

        return ()=>{
            window.removeEventListener('keydown', handleKeyDown)
        }
    },[matches])

    return <nav className={className}>
        <IconButton id="close-menu-icon" onClick={()=>setOpen(!open)}>
            <IoIosClose/>
        </IconButton>

        {navbarLinks.map((link, i) => <NavLink key={i} className="nav-item" to={link.path}>{link.title}</NavLink>)}

        <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>

        <IconButton id="search-icon" onClick={()=>setSearchOpen(!searchOpen)}>
            <IoIosSearch/>
        </IconButton>
    </nav>
}