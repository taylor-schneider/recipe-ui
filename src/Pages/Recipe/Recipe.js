import './Recipe.css';
import Title from '../../Components/Title/Title'
import Version from '../../Components/Version/Version'
import Authors from '../../Components/Authors/Authors'
import Description from '../../Components/Description/Description';
import Rating from '../../Components/Rating/Rating'
import React, { Component } from "react";
import {useLocation, useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import DefaultLayout from '../../Layouts/Default/Default';

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
        <div id={this.state.guid} className="recipe">
          {Title(this.state.recipe.name)}
          {Authors(this.state.recipe.authors)}
          {Version(this.state.recipe.version)}
          {Rating(this.state.recipe.rating)}
          {Description(this.state.recipe.description)}

        </div>
      </DefaultLayout>
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