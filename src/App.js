
import './App.css';
import axios from 'axios';
import React,  {useState} from 'react'
import Gallery from './Gallery';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [search, setSearch] = useState("");
const [data, setData] = useState([]);

  const submitHandler = e =>{
    e.preventDefault();
    console.log(search)
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => setData(res.data.photos.photo))
    .catch(err => {
      console.log("Encountered an error with fetching and parsing data", err);
    })
  }
  const changeHandler = e =>{
    setSearch(e.target.value)
  }
  return (
    <div>
      <center>
        <h1> Image Gallery Search </h1>
        <form onSubmit={submitHandler}>
          <input size="30" type="text" 
         value={search} onChange={changeHandler} placeholder="Example: 'Cars'"/><br />
          <input type="Submit" />
        </form>
        <br/>
        {data.length>=1 ? <Gallery data={data}/> : <h4> No image loaded </h4> }
       
      </center>
    </div>
  )
}

export default App
