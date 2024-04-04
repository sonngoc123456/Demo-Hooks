import * as React from 'react';
import { useReducer } from "react";
import { DECREMENT, INCREMENT, initialState, reducer } from './Reducer';

const HookReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <p>Number: {state.number}</p>
            <p>Count: {state.count}lần</p>

            <button onClick={() => dispatch({ type: INCREMENT })}>Increment!</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>Decrement!</button>
        </div>

    );
}

export default HookReducer;