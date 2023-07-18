import './RecipeSummaryPanel.css';
import Version from '../../Components/Recipe/Version/Version'
import Authors from '../../Components/Recipe/Authors/Authors'
import Description from '../../Components/Recipe/Description/Description';
import Rating from '../../Components/Recipe/Rating/Rating'
import Section from '../../Sections/Section/Section';
import ImageGallery from '../../Components/Recipe/ImageGallery/ImageGallery'


function SummaryPanel(recipe) {
  var summary_info = null
  var summary_images = null
  var nutrition_info = null

  if(recipe != null){

    // Create the info block
    var components = [
      Rating(recipe),
      Authors(recipe),
      Description(recipe),
      ImageGallery(recipe)
    ]
    var summary_section = <Section components={components} additional_classes="recipe-summary-section" />


    nutrition_info = (
      <div className="RecipeSummaryNutritionInfo">Nutrition Info Goes Here</div>
    )
  }

  return (
    <div className="SummaryPanel scroll-panel">
      {summary_section}
      {nutrition_info}
    </div>
  );
}

export default SummaryPanel;

