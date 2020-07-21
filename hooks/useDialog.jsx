import React, { useState } from 'react'


/**
 * @function useDialogHook
 * @description React Hook to handle open and close dialogs
 * @returns {Array:Function} : [open, handleClickOpen, handleClose]
 * @author Sarat Chandra Ejjapureddi
 */
function useDialogHook() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return [open, handleClickOpen, handleClose]
}

export default useDialogHook