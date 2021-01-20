import React, { useState } from 'react'

/**
 * @function useToggleHook
 * @description React Hook to handle toggle button and lists
 * @returns {Array:Function} : [open, handleClickOpen, handleClose]
 */
function useToggle(defaultState) {
    const [open, setOpen] = useState(defaultState||false);

    const toggleFun = (e) => {
        setOpen(!open);
        e.stopPropagation();
    };

    return [open, toggleFun]
}

export default useToggle