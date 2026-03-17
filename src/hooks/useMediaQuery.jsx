import { useEffect, useState } from "react";

export default function useMediaQuery(mediaQuery){

    const [matches, setMatches] = useState(()=>window.matchMedia(mediaQuery).matches);

    useEffect(()=>{

        const media = window.matchMedia(mediaQuery);

        function handleChange(e){
            setMatches(e.matches)
        }

        media.addEventListener('change', handleChange);

        return ()=> media.removeEventListener('change', handleChange);

    },[mediaQuery])

    return matches;
}
