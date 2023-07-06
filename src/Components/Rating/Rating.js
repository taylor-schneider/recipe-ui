import './Rating.css';
import star_img from './star.png'

function Rating(rating, id=null) {
  if(rating==null){rating=0}
  var content = []
  for(let i = 0; i < rating; i++){
    content.push(<img className='star-img' src={star_img}></img>)
  }

  return (
    <div id="rating" className="rating">
        {content}
    </div>
  );
}

export default Rating;
