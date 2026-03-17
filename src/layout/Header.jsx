import Navbar from "../componenten/Navbar";
import IconButton from "../componenten/buttons/IconButton";
import {  IoIosMenu  } from "react-icons/io";
import "../assets/css/layout/header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Header(){
    const [open, setOpen] = useState(false);

    const matches = useMediaQuery('(min-width: 800px)');

    useEffect(()=>{
        if(matches) setOpen(false)
    },[matches])

    return <header>
        <div>
            <Link to="/"><h1>NeoFlix</h1></Link>
            <IconButton id="menu-icon" onClick={()=>setOpen(!open)}>
                <IoIosMenu />
            </IconButton>
        </div>

        <Navbar className={`${open ? "open" : ""}`} setOpen={setOpen}/>
    </header>
}