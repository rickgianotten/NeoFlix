
import CheckBox from "../inputs/CheckBox"

export default function GenreBox({genres, selectedGenres, setSelectedGenres}){

    function handleChange(e){
        const id = Number(e.target.value);
        setSelectedGenres(prev =>{
            if(prev.includes(id)){
                return prev.filter((genre)=> genre != id);
            }else{
                return [...prev, id];
            };
        });
    };

    return <div>
            <h3 style={{color: "var(--sc-color)"}}>genres:</h3>
            {genres?.genres?.map((genre)=> <CheckBox key={genre.id} name={genre.name} id={genre.id} value={genre.id} onChange={(e)=>handleChange(e)} checked={selectedGenres.includes(genre.id)}/>)}
    </div>
}