import { useSearchParams } from "react-router-dom";

export default function useQueryParams(param){
    const [searchParams, setSearchParams] = useSearchParams();

    const paramValue = searchParams.get(param) || "";

    return {paramValue, setSearchParams}
}