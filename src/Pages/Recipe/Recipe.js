import './Recipe.css';
import React, { Component } from "react";
import {useLocation, useNavigate, useParams } from "react-router-dom";
import DefaultLayout from '../../Layouts/Default/Default';

// Import generic contiainers
import Section from '../../Sections/Section/Section';
import Panel from '../../Panels/Panel/Panel';

// Import relevant components
import Title from '../../Components/Recipe/Title/Title'
import Rating from '../../Components/Recipe/Rating/Rating'
import Authors from '../../Components/Recipe/Authors/Authors'
import Description from '../../Components/Recipe/Description/Description'
import ImageGallery from '../../Components/Recipe/ImageGallery/ImageGallery';


class Recipe extends Component {

  state = {
    recipe: {}
  };

  componentDidMount() {

    console.log("These are the props:")
    console.log(this.props)
    const search_string = this.props.router.location.search
    console.log("search string: ")
    console.log(search_string)
    const queryParams = new URLSearchParams(search_string)
    const guid = queryParams.get("guid")
    const version = queryParams.get("version")

    var recipe_url = "http://127.0.0.1:8008/recipe?guid=" + guid;
    if (version != null){
      recipe_url += "&version=" + version
    }

    console.log("recipe url")
    console.log(recipe_url)
    fetch(recipe_url)
      .then(res => res.json())
      .then((recipe) => {
        this.setState({ recipe: recipe })
      });
  }

  render() {

    var components = [
      Rating(this.state.recipe),
      Authors(this.state.recipe),
      Description(this.state.recipe),
      ImageGallery(this.state.recipe)
    ]
    var summary_panel_sections = [
      Section({components}, "summary-panel-section-1")
    ]
    var summary_panel = Panel(summary_panel_sections, "summary-panel")

    return (
      <DefaultLayout>
        <div className="Recipe">
          {Title(this.state.recipe)}
          <div className="panel-scoller">
            {summary_panel}
          </div>
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