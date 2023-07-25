import './Recipe.css';
import React, { Component, useEffect } from "react";
import {useLocation, useNavigate, useParams } from "react-router-dom";
import DefaultLayout from '../../Layouts/Default/Default';


// Import generic contiainers
import ContentSection from '../../LayoutObjects/ContentSection/ContentSection';
import ContentContainer from '../../LayoutObjects/ContentContainer/ContentContainer';

// Import relevant components
import Title from '../../Components/Recipe/Title/Title'
import Rating from '../../Components/Recipe/Rating/Rating'
import Authors from '../../Components/Recipe/Authors/Authors'
import Description from '../../Components/Recipe/Description/Description'
import ImageGallery from '../../Components/Recipe/ImageGallery/ImageGallery';
import Version from '../../Components/Recipe/Version/Version';
import SaveEditDiscardControl from '../../Components/SaveEditDiscardControl/SaveEditDiscardControl'
import RecipeHeader from '../../Components/Recipe/RecipeHeader/RecipeHeader';

class Recipe extends Component {

  state = {
    recipe: {},
    editMode: false
  };

  componentDidMount() {

    // Do some logic to extract the uri params
    const search_string = this.props.router.location.search
    const queryParams = new URLSearchParams(search_string)
    const guid = queryParams.get("guid")
    // Determine the url to the api based on the params
    const version = queryParams.get("version")
    var recipe_url = "http://127.0.0.1:8008/recipe?guid=" + guid;
    if (version != null){
      recipe_url += "&version=" + version
    }
    // Query the api for the specified recipe and set the state for the component
    fetch(recipe_url)
      .then(res => res.json())
      .then((recipe) => {
        this.setState({ recipe: recipe })
      });
  }



  render() {

    let expandingPanelComponents = [
      <SaveEditDiscardControl key='foo'/>
    ]
    let headerComponents = [
      <RecipeHeader key='bar'recipe={this.state.recipe}/>
    ]

    return (
      <DefaultLayout headerComponents={headerComponents} panelComponents={expandingPanelComponents}>
		    <div className="Recipe">
          <ContentSection>
            <ContentContainer>
              <Rating recipe={this.state.recipe}/>
              <Authors recipe={this.state.recipe}/>
              <Description recipe={this.state.recipe}/>
              <ImageGallery recipe={this.state.recipe}/>
            </ContentContainer>
            <ContentContainer>Content</ContentContainer>
            <ContentContainer>Content</ContentContainer>
            <ContentContainer>Content</ContentContainer>
            <ContentContainer>Content</ContentContainer>
            <ContentContainer>Content</ContentContainer>
            <ContentContainer>Content</ContentContainer>
            <ContentContainer>Content</ContentContainer>
            <div className='ContentContainer' style={{height: '8vh', 'backgroundColor': 'orange'}}>
              This is a hack to make the snap scroll work...
            </div>
          </ContentSection>
        </div>
      </DefaultLayout>
    );
  }
}

//          
//

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter(Recipe)