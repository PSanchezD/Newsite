import { useState, useEffect } from "react"



function Search(){
    const axios = require("axios").default;
    const [Ani, setAni] = useState([]);
    const [query,setQuery]=useState("local")

    const getCar = () => {
        axios
          .get(
            `https://react-express-s.herokuapp.com/search?q=${query}`
          )
          .then((res) => {
            setAni(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      useEffect(() => {
        getCar();
      }, []);
     

    return(
        <>
        <div>
        <div className="title">
          <h1> SEARCH TOP NEWS OF TODAY</h1>
        </div>
        <div className="searchBar">
      <input type="search" placeholder=" Search For a Topic" onChange={(e)=> setQuery(e.target.value)}/>
      <button onClick={getCar}>search</button>
  </div>
        <div className="container">
          {Ani.map((item) => {
            return (
              <>
                <div className="card-c">
                  <div className="card-r">
                    <a href={item.url} target="_blank">
                      <div className="card" key={item.id}>
                        <img src={item.urlToImage} alt="img" />
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p className="p2">{item.author}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <a className="top" href="#">back to the top</a>
      </div>
    </>
    )
}
export default Search