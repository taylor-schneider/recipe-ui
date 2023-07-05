import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home/Home';
import Recipe from './Pages/Recipe/Recipe';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';



export default function App() {
  return (
    
    <BrowserRouter>
      <Link to="/recipe?guid=foobar">Foobar Recipe</Link>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/recipe' element={<Recipe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//var recipes_url = "http://127.0.0.1:8080/recipes"
//let response = await fetch(recipes_url);
//let recipe_guids = await response.json();
//var recipe_guid = recipe_guids[0];
//
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <Recipe guid = {recipe_guid}/>
//  </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
