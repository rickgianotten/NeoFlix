export default function voteAverageToStars(voteAverage){
    if(!voteAverage){
        return {full: 0, half: false, empty: 5};
    };
    
    const stars = Math.round((voteAverage / 2) * 2) / 2;
    const full = Math.floor(stars);
    const half = stars % 1 !== 0;
    const empty = 5 - full - (half ? 1 : 0);
    return {full, half, empty};
}