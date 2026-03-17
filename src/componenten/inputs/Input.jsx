import "../../assets/css/componenten/inputs/input.css"

export default function Input({type, placeholder, onChange, value, style, className, name, onKeyDown = ()=>{}}){
    return <input name={name} className={`input ${className}`} type={type} placeholder={placeholder} onChange={onChange} value={value} autoFocus style={style} onKeyDown={onKeyDown}/>
}