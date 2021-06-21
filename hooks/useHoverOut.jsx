import React, { useRef, useEffect } from 'react'

/**
 * @function useHoverOut
 * @param {any} elementRef
 * @param {any} callback
 * @returns {any}
 * @description When you want to call a function when hovered inside the element 
 * Ex: Hovering on Shopping Card should detect the event call a function to scroll other pics or highlighting
 * Pass the callback with useCallBack in your function since it's functionality always remains same for better performance.
  * @author Sarat Chandra Ejjapureddi
 */
export default function useHoverOut(elementRef, callback) {
    React.useEffect(() => {
        const handleHoverOut = (event) => {
            event.preventDefault()
            if (elementRef && elementRef.current && elementRef.current.contains(event.target)) {
                // Call Callback only if event happens inside element or descendent elements
                callback()
            }
            return
        }
        document.addEventListener('mouseout', handleHoverOut, true)
        return () => {
            document.removeEventListener('mouseout', handleHoverOut, true)
        }
    }, [elementRef, callback])
}