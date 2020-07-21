import React, { useRef, useEffect } from 'react'

/**
 * @function useFetch
 * @description React Hook to call apis on load with Fetch 
 * @param {string} url
 * @param {Object} options
 * @returns {Object} { response, error, loading }
 * @author Sarat Chandra Ejjapureddi
 * @example data = useFetch('<url>')
 */
export default function useFetch(url, options) {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(url, options)
                const json = await res.json()
                setLoading(false)
                setResponse(json)
            } catch (err) {
                setLoading(false)
                setError(err)
            }
        }
        fetchData()
    }, [])
    return { response, error, loading }
}