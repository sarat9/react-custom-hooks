import React, { useRef, useEffect } from 'react'



/**
 * @function useCopyToClipboard
 * @param {any} text
 * @returns {[Function, Function]}
 * @description When you want to pass a state value and provide a copy to ClipBoard option
 * @author Sarat Chandra Ejjapureddi
 * 
 * When you want to pass a state value and provide a copy to ClipBoard option.
 * Whenever a state value is passed as parameter, invoking the call function will set the value in clipboard
 */
export default function useCopyToClipboard(text) {

    const copyToClipboard = (str) => {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      const success = document.execCommand('copy');
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
      return success;
    };
  
    const [copied, setCopied] = React.useState(false);
  
    const copy = React.useCallback(() => {
      if (!copied) setCopied(copyToClipboard(text));
    }, [text]);

    React.useEffect(() => () => setCopied(false), [text]);
  
    return [copied, copy];
  };