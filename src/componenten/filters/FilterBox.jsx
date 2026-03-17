import GenreBox from "./GenreBox"

export default function FilterBox({genres, selectedGenres, setSelectedGenres}){

    return <aside style={{backgroundColor: 'var(--sc-bg)', height: 'fit-content', padding: '0.75rem', marginLeft: '0.75rem', borderRadius: '0.5rem'}}>
        <GenreBox genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
    </aside>
}