import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/* Import the code for our pages */
import Home from './Pages/Home/Home';
import Recipe from './Pages/Recipe/Recipe';
import GridTest from './Pages/GridTest/GridTest';
import Test from './Pages/Test/Test'

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/recipe' element={<Recipe />}></Route>
        <Route exact path='/grid' element={<GridTest />}></Route>
        <Route exact path='/test' element={<Test />}></Route>

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
