import './Recipe.css';
import Title from './../../Components/Title/Title'
import Version from './../../Components/Version/Version'
import React, { Component } from "react";

export default class Recipe extends Component {

  state = {
    guid: "",
    recipe: {}
  };

  componentDidMount() {
    const recipe_url = "http://127.0.0.1:8080/recipe/" + this.props.guid;

    fetch(recipe_url)
      .then(res => res.json())
      .then((recipe) => {
        this.setState({ recipe: recipe })
      });
  }

  render() {
    console.log(this.state.recipe)

    return (
      <div id={this.props.guid} className="recipe">
        <h1>{this.props.guid}</h1>
        {Title(this.state.recipe.name)}
        {Version(this.state.recipe.version)}
      </div>
    );
  }
}