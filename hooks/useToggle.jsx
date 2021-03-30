import React, { useState, useCallback } from 'react'

/**
 * @function useToggleHook
 * @description React Hook to handle toggle button and lists
 * @returns {Array:Function} : [open, handleClickOpen, handleClose]
 */
function useToggle(defaultState) {
    const [open, setOpen] = useState(defaultState||false);

    const toggleFun = useCallback((e) => {
        setOpen(!open);
        e.stopPropagation();
    },[open]);

    return [open, toggleFun]
}

export default useToggle