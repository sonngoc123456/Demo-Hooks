import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from "react";


const useGetData = (url) => {
    const [data, setData] = useState([])

    const fetchData = async (url) => {
        const response = await axios.get(url);
        setData(response);
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return data
}

export default useGetData;