import React, { useState, useEffect } from 'react'

/**
 * @function useFileUpload
 * @description React Hook to use state values for file uploads
 * @returns [selectedFile, handleFileInputChange, fileDetails]
 * @author Sarat Chandra Ejjapureddi
 */
export default function useFileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileDetails, setFileDetails] = useState(null);


    const handleFileInputChange = (e) => {
        const fileData = e.target.files[0];
        const { name, type, size } = fileData;
        setSelectedFile(fileData);
        setFileDetails({ name, type, size });
      };

    return [selectedFile, handleFileInputChange, fileDetails]
}