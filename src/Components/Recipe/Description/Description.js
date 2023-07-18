import './Description.css';

function Description({recipe}) {
  return (
    <div className="Description">
      <p>{recipe.description}</p>
    </div>
  );
}

export default Description;
