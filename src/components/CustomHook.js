import * as React from 'react';
import useGetData from './useGetData';



const CustomHook = () => {

    const { data } = useGetData('https://pokeapi.co/api/v2/pokemon/ditto')
    console.log('data', data)


    return (
        <div>
            <p>Name: {data?.abilities[0]?.ability?.name}</p>
        </div>

    );
}

export default CustomHook;
