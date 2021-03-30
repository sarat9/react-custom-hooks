import React, { useState, useEffect } from 'react'

/**
 * @function useInputField
 * @description React Hook to use state values for input fields
 * @param {any} defaultValue
 * @param {boolean} specialCharsAllow 
 * @returns {any} 
 * @author Sarat Chandra Ejjapureddi
 */
export default function useInputField(defaultValue = '', specialCharsAllow=true) {
    const [value, setValue] = useState(defaultValue)

    const handleInputValue = (e) => {
        if (e) {
            let val = e.target.value
            if(!specialCharsAllow){
                val =  val.replace(/[^\w\s]/gi, "") 
            }
            setValue(e.target.value)
        }
    }

    return [value, setValue, handleInputValue]
}



// Regex Expressions to handle Special Characters depending o n UseCase
/*
* Replaces all Special Characters:
*    val.replace(/[^\w\s]/gi, "") 
* Replaces all Special Characters Except Comma(,):
*    val.replace(/[^\w\s,]/gi, "") 
* Allows only Numeric Digits and  Comma(,):
*    val.replace(/[^0-9\.,]/g, "")
*
**/