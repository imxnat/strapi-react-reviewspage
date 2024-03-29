import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const ReviewDetails = () => {

    const { id } = useParams();

    const {loading, data, error } = useFetch(`http://localhost:1337/reviews/${id}`)
    
    const apiURL= 'http://localhost:1337' 

    if(loading) return <div className="lds-facebook"><div></div><div></div><div></div></div>
    if(error) return <p>Something went wrong :(</p>


    return (
        <div className='review-card'> 
            <img className="logo" src={apiURL + data.cover.url} alt={data.title} />
              
              <div className="rating" >{data.rating}</div>
              <h2>{data.title}</h2>

              <small>Created: {data.created_at.substring(0,10)}  |  Last Update: {data.updated_at.substring(0,10)}</small>

              <p>{data.body}</p>
              <Link to='/' >Back to reviews</Link>
            </div> 
    )
}

export default ReviewDetails
