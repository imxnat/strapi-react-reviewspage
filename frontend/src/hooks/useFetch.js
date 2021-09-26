import { useEffect, useState } from 'react'

const useFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const fetchData = async () => {
            setLoading(true) // the fetch is on march

            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
                setLoading(false) // we finish the fetch

            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [url]) //dependency
    
  
    return { loading, error, data }
}

export default useFetch
