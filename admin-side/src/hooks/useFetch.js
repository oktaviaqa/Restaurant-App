import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchItems } from "../stores/actions/actionCreator";

export default function useFetch(url) {

    const [data, setData] = useState([])
    async function fetchItems() {
        try {
            let response = await fetch('http://localhost:3001/' + url);
            if (!response.ok) {
                throw {name: 'failed'}
            }
            response = await response.json()
            console.log(response);
            setData(response)
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchItems()
    }, []);
    

    return { data }
}
