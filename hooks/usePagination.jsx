import React, { useState } from 'react'


/**
 * @function usePagination
 * @description React Hook to handle page, increment, decrement and setPage
 * @returns {Array:Function} : [page, increment, decrement, setPage]
 * @author Sarat Chandra Ejjapureddi
 */
function usePagination(defaultValue=1) {
    const [page, setPage] = React.useState(defaultValue);

    const onToNextPage = () => {
        setPage(page+1);
    };

    const onToPreviousPage = () => {
        setPage(page-1);
    };

    const handlePage = (e,value) => {
        e.preventDefault()
        setPage(value);
    };
    
    const resetPage = () => {
        setPage(defaultValue);
    }

    return [page, handlePage, resetPage, onToNextPage, onToPreviousPage, setPage]
}

export default usePagination