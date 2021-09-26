import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


const Homepage = () => {
    //destructuring
    const { loading, data, error } = useFetch('http://localhost:1337/reviews')

    if(loading) return <div className="lds-facebook"><div></div><div></div><div></div></div>
    if(error) return <p>Something went wrong :(</p>

    return (
        <div>
            {/* // LIST OF REVIEWS */}
           {data.map(review => (
            <div key={review.id} className='review-card'>
              <div className="rating" >{review.rating}</div>
              <h2>{review.title}</h2>

              <small>console list</small>

              <p>{review.body.substring(0, 200)}</p>
              <Link to={`/details/${review.id}`}>Read more</Link>
            </div>  
          ))}  


        </div>
    )
}

export default Homepage
