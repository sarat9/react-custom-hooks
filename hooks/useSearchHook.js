import { func } from "prop-types";
import React, { useState, useEffect, useCallback, useRef } from "react";

/**
 * @function useSearch
 * @description React Hook to use state values for input fields
 * @param {any} defaultValue
 * @param {int} debounceDelay
 * @returns {any}
 * @author Sarat Chandra Ejjapureddi
 */
export default function useSearch(defaultValue = "", debounceDelay = 500) {
  const [value, setValue] = useState(defaultValue);

  const handleInputValue = (e) => {
    if (e) {
      e.preventDefault();
      let val = e.target.value;
      setValue(val);
    }
  };

  const debouncedFun = debounce(handleInputValue, debounceDelay);
  return [value, setValue, debouncedFun];
}


function debounce(fn, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    const args = arguments;
    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
}

function useDebounce(callback, delay = 500) {
  const debounceRef = useRef();
  let debouncedCallback = function(){
    
    if (debounceRef.current) {
        clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(()=> {
      const args = arguments;
      callback(...args);
    }, delay);
  };
  
  return debouncedCallback;
}

