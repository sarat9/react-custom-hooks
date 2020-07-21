import React, { useRef, useEffect } from 'react'

/**
 * @function usePrevious
 * @description React Hook to use previos state and props 
 * @param {any} value
 * @returns {any} previousValue
 * @author Sarat Chandra Ejjapureddi
 */
export default function usePrevious(value) {
    const previousValue = useRef(value)
    useEffect(() => {
        previousValue.current = value;
    })
    return previousValue.current
}