import "../../assets/css/componenten/buttons/iconButton.css"

export default function IconButton({children, onClick = ()=>{}, id="", disabled = false}){
    return <button className="icon" onClick={onClick} id={id} disabled={disabled}>
        {children}
    </button>
}