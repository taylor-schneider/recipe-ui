import './Recipe.css';
import React, { Component } from "react";
import {useLocation, useNavigate, useParams } from "react-router-dom";
import DefaultLayout from '../../Layouts/Default/Default';
import RecipeSummaryPanel from '../../Panels/RecipeSummaryPanel/RecipeSummaryPanel';
import Title from '../../Components/Recipe/Title/Title'

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

    var recipe_url = "http://127.0.0.1:8080/recipe?guid=" + guid;
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

    console.log("render:")
    console.log(this.state.recipe)

    return (
      <DefaultLayout>
        <div className="Recipe">
          {Title(this.state.recipe)}
          <div className="panel-scoller">
            {RecipeSummaryPanel(this.state.recipe)}
            <div className="PreparationPanel scroll-panel">This is the preparation panel</div>
            <div className="OtherPanel scroll-panel">This is the other panel</div>
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