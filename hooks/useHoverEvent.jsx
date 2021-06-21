import React, { useRef, useEffect } from 'react'



/**
 * @function useHoverEvent
 * @param {any} elementRef
 * @param {any} hoveredCallback - when hovered on element
 * @param {any} hoveredOutCallback - when hovered/mouse out from the element after hover
 * @returns {any}
 * @description When you want to call a function when hovered inside the element 
 * Ex: Hovering on Shopping Card should detect the event call a function to scroll other pics or highlighting
 * Pass the callback with useCallBack in your function since it's functionality always remains same for better performance.
  * @author Sarat Chandra Ejjapureddi
 */
export default function useHoverEvent(elementRef, hoveredCallback, hoveredOutCallback) {
    React.useEffect(() => {
        const handleHoverInside = (event) => {
            event.preventDefault()
            if (elementRef && elementRef.current && elementRef.current.contains(event.target)) {
                // Call Callback only if event happens inside element or descendent elements
                hoveredCallback()
            }
            return
        }
        const handleHoverOut = (event) => {
            event.preventDefault()
            if (elementRef && elementRef.current && elementRef.current.contains(event.target)) {
                // Call Callback only if event happens inside element or descendent elements
                hoveredOutCallback()
            }
            return
        }

        // Calls when an elements is hovered
        document.addEventListener('mouseover', handleHoverInside, true)
        // Calls when an elements is hovered and then hovered out (mouseout) of that element
        document.addEventListener('mouseout', handleHoverOut, true)
        return () => {
            document.removeEventListener('mouseover', handleHoverInside, true)
            document.removeEventListener('mouseout', handleHoverOut, true)
        }
    }, [elementRef, hoveredCallback, hoveredOutCallback])
}