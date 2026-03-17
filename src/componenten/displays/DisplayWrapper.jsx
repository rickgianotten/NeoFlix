export default function DisplayWrapper({children}){
    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '1.5rem'}}>
        {children}
    </div>
}