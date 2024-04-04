import * as React from 'react';
import {useEffect, useState, useMemo} from "react";



const ListHooks = () => {

    const [count, setCount] = useState(0)

    const Sum = (a, b) => {
        console.log('Tổng = ', a + b)
        return a + b
    }

    // const number = Sum(3, 5)

    const number = useMemo(() => Sum(3,5), [])


    // useEffect(() => {
    //     getData().then(res =>{
    //         setState({ListProducts:res.data})
    //     }).catch(err => console.log(err.message))
    // },[number])

    return (
        <div>
            <p>Count: {count}</p>

            <p>Number: {number}</p>
            <button onClick={() => setCount(count + 1)}>Increment!</button>
            <button onClick={() => setCount(count - 1)}>Decrement!</button>
        </div>

    );
}

export default ListHooks;
