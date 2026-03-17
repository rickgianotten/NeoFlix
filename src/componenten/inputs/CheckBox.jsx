export default function CheckBox({name, id, onChange = ()=>{}, checked= false, value}){
    return <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
        <input type="checkbox" name={name}  id={id} onChange={onChange} value={value} checked={checked}/>
        <label htmlFor={id} style={{color: "var(--text-soft-white)"}}>{name}</label>
    </div>

}