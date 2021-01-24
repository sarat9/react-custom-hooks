import React, { useState } from 'react'


/**
 * @function useCounter
 * @description React Hook to handle counter, increment and decrement
 * @returns {Array:Function} : [counter, increment, decrement]
 * @author Sarat Chandra Ejjapureddi
 */
function useCounter(defaultValue=0) {
    const [counter, setCounter] = React.useState(defaultValue);

    const increment = () => {
        setCounter(counter+1);
    };

    const decrement = () => {
        setCounter(counter-1);
    };
    return [counter, increment, decrement]
}

export default useCounter