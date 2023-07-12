import './Rating.css';
import star_img from './star.png'

function Rating(recipe) {

  console.log("star_img")
  console.log(star_img)

  var star_imgs = []
  var reviews = 0
  var reviews_text = ""

  if(recipe != null){

    // Create the rating image
    for(let i = 0; i < recipe.rating; i++){
      star_imgs.push(<img className='star-img' src={star_img}></img>)
    }

    // Determine how people reviewed the recipe
    if(recipe.reviews != null){
      reviews = recipe.reviews.length
      if (reviews == 1) {
        reviews_text = "(" + reviews + " Reviews)"
      }
      else{
        reviews_text = "(" + reviews + " Reviews)"
      }
    }
  }


  return (
    <div className="Rating">
      <span>{star_imgs}</span>
      <span>{reviews_text}</span>  
    </div>
  );
}

export default Rating;
