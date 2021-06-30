import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
function App() {

  const APP_ID = '24db878f';
  const APP_KEY = "8f2be69a71c33ec80095fadb5dbed756";
  
 const [menu , setMenu] = useState([]);
 const [search, setSearch] = useState('');
 const [query ,setQuery] = useState('chicken');
  
  const getRequest = async () => {
     const  response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
     const data = await response.json();
     setMenu(data.hits);
     


  }
    
  
  
 useEffect(()=> {

  getRequest();

  },[query]);  
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
    <form   onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button className="search-button" type="submit">Search</button>
    </form>
     <div className="container">
    {menu.map((recipe) => {
      return <Recipe key={recipe.recipe.label} title={recipe.recipe.label}  calories={recipe.recipe.calories} image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      />
    })}
    </div>
    </div>
  );
}

export default App;
