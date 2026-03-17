import "../../assets/css/componenten/buttons/outlineButton.css"

export default function OutlineButton({onClick = ()=>{}, children, className}){
    return <button onClick={onClick} className={`outline-btn ${className}`}>{children}</button>
}