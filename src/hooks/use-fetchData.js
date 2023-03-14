import { useState } from "react";

const useFetchData = (url)=>{

    const [data, setData] = useState([]);

    const setDataHandler = async ()=>{

        const response = await fetch(url);
        const data = await response.json();

        setData()

    }

    return [data, setDataHandler];

};

export default useFetchData;