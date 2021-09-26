import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const ReviewDetails = () => {

    const { id } = useParams();

    const {loading, data, error } = useFetch(`http://localhost:1337/reviews/${id}`)
    
    if(loading) return <div className="lds-facebook"><div></div><div></div><div></div></div>
    if(error) return <p>Something went wrong :(</p>

    console.log(data);

    return (
        <div className='review-card'> 
            {/* <img src={data.cover.url} alt=""/> */}
              
              <div className="rating" >{data.rating}</div>
              <h2>{data.title}</h2>

              <small>console list</small>

              <p>{data.body}</p>
              <Link to='/' >Back to reviews</Link>
            </div> 
    )
}

export default ReviewDetails
