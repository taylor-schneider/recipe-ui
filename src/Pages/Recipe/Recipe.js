import './Recipe.css';
import Title from '../../Components/Title/Title'
import Version from '../../Components/Version/Version'
import React, { Component } from "react";
import {useLocation, useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

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
    console.log(this.state)

    return (
      <div id={this.state.guid} className="recipe">
        {Title(this.state.recipe.name)}
        {Version(this.state.recipe.version)}
      </div>
    );
  }
}

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