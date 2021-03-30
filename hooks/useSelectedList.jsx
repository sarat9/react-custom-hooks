import React, { useState, useEffect } from 'react'

/**
 * @function useSelectedList
 * @description React Hook to use List where we can select or unselect list of items
 * @param {any} value
 * @returns {any} 
 * @author Sarat Chandra Ejjapureddi
 */
export default function useSelectedList(defaultList = [], uniqueValue) {


    //-------------------IN Progress 

    const [list, setList] = useState(defaultList)
    const [uniqueValue, setUniqueValue] = useState(uniqueValue)
    const [selectedList, setSelectedList] = useState(uniqueValue)


    

    const handleInputValue = (e) => {
        if (e) {
            setValue(e.target.value)
        }
    }

    return [list]
}