import React, { useRef, useEffect } from 'react'



/**
 * @function useClickOutside
 * @param {any} elementRef
 * @param {any} callback
 * @returns {any}
 * @description When you want to call a function when clicked outside the element Ex: Modal PopUp
 * @author Sarat Chandra Ejjapureddi
 * Pass the callback with useCallBack in your function since it's functionality always remains same for better performance.
 */
export default function useClickOutside(elementRef, callback) {
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            event.preventDefault()
            if (elementRef && elementRef.current && !elementRef.current.contains(event.target)) {
                // Call Callback only if event happens outside element or descendent elements
                callback()
            }
            return
        }
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [elementRef, callback])
}


/**
 * @function useClickOutside
 * @param {any} elementRef
 * @param {any} callback
 * @returns {any}
 * @description When you want to call a function when clicked outside the element Ex: Modal PopUp
 * Use this function rather than above when you are sure you wont be changing the callback. 
 * You then don't need to pass the callback with useCallback for performance.
 */
export function useClickOutside2(elementRef, callback) {
    const callbackRef = useRef(callback)
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            event.preventDefault()
            if (elementRef && elementRef.current && !elementRef.current.contains(event.target)) {
                // Call Callback only if event happens outside element or descendent elements
                callbackRef.current()
            }
            return
        }
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [elementRef, callback])
}