import './RecipeSummaryPanel.css';
import Version from '../../Components/Recipe/Version/Version'
import Authors from '../../Components/Recipe/Authors/Authors'
import Description from '../../Components/Recipe/Description/Description';
import Rating from '../../Components/Recipe/Rating/Rating'

function SummaryPanel(recipe) {
  var summary_info = null
  var summary_images = null
  var nutrition_info = null

  if(recipe != null){

    // Create the info block
    summary_info = (
      <div className="SummaryPanel-SummaryInfo">
        {Rating(recipe)}
        {Authors(recipe)}
        {Description(recipe)}
        <div className="RecipeSummaryImages">Images Go Here</div>
      </div>
    )

    nutrition_info = (
      <div className="RecipeSummaryNutritionInfo">Nutrition Info Goes Here</div>
    )
  }

  return (
    <div className="SummaryPanel scroll-panel">
      {summary_info}
      {nutrition_info}
    </div>
  );
}

export default SummaryPanel;

