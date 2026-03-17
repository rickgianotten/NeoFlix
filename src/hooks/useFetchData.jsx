import {useState, useEffect} from 'react';

export default function useFetchData(apiFn, dp = []){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState([]);

    useEffect(()=>{
        async function getData(){
            setLoading(true)
            try {
                const data = await apiFn();
                setData(data);
            } catch (error) {
                console.log(error)
                setError(error);
            }finally{
                setLoading(false)
            }
        }
        getData();
    },dp);

    return { data, loading, error };
}