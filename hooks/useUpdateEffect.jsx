import React, { useRef, useEffect } from 'react'


/**
 * @function useUpdateEffect
 * @description React Hook to call snippet ONLY-ON-UPDATE
 * Refrence: https://stackoverflow.com/questions/55075604/react-hooks-useeffect-only-on-update
 * 
 * @param {Function} effect
 * @param {Array<any>} dependencies
 * @returns {Function} cleanUpFunction()
 * @author Sarat Chandra Ejjapureddi
 */
export default function useUpdateEffect(effect, dependencies) {
    const isInitialMount = useRef(true);
    let cleanUpFunction = function () { }
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            cleanUpFunction = effect() || cleanUpFunction
        }
        return () => {
            cleanUpFunction()
            // if (!isInitialMount.current) {
            //     isInitialMount.current = true;
            // }
        }
    }, dependencies);
}