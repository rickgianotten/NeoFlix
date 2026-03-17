import { Link } from "react-router-dom";
import "../../assets/css/componenten/buttons/navButton.css";

export default function NavButton({children, to, target = ""}){
    return <Link to={to} className="nav-btn" target={target}>{children}</Link>
}