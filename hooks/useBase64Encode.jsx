import React, { useState, useEffect } from 'react'

/**
 * @function useBase64Encode
 * @description React Hook to encode event String value to Base64 without storing text anywhere
 * @param {any} value
 * @returns {any} encoded value and function to pass event
 * @author Sarat Chandra Ejjapureddi
 */
export default function useBase64Encode(defaultValue = '') {
    const [value, setValue] = useState(btoa(defaultValue))

    const encodeValue = (e) => {
        if (e) {
            // btoa() Encodes String to Base64
            setValue(btoa(e.target.value))
        }
    }

    const decodeValue = (e) => {
        if (e) {
            // atob() Encodes Base64 to String
            setValue(atob(e.target.value))
        }
    }
    return [value, encodeValue]
}






/*
*   What is Base64?
*   https://infosecwriteups.com/base64-explained-17cd8864da02
*/
