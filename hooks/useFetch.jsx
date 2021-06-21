import React, { useRef, useEffect } from 'react'



const initialOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
};

/**
 * @function useFetch
 * @description React Hook to call apis on load with Fetch .
 *       componentMounted flag to avaoid memory leak
 * @param {string} url
 * @param {Object} options
 * @returns {Object} { response, error, loading }
 * @author Sarat Chandra Ejjapureddi
 * @example data = useFetch('<url>')
 */
export default function useFetch(url, options = initialOptions) {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let componentMounted = true;
        const fetchData = async () => {
            
            try {
                setLoading(true)
                const res = await fetch(url, options)
                const json = await res.json()
                if(componentMounted){
                    setResponse(json)
                }
            } catch (err) {
                setLoading(false)
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
        return () => {
            componentMounted = false;
        }
    }, [])
    return { response, error, loading }
}