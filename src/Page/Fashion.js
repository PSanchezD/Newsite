import { useEffect, useState } from "react";

function Fashion() {
  const axios = require("axios").default;
  const [fas, setFas] = useState([]);

  const getCar = () => {
    axios
      .get("https://react-express-s.herokuapp.com/Fashion")
      .then((res) => {
        setFas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCar();
  }, []);
  return (
    <>
      <div>
        <div className="title">
          <h1>TOP FASHION NEWS</h1>
        </div>
        <div className="container">
          {fas.map((item) => {
            return (
              <>
                <div className="card-c">
                  <div className="card-r">
                    <a href={item.url} target="_blank">
                      <div className="card" key={item.id}>
                        {item.urlToImage == null ? null : (
                          <img src={item.urlToImage} alt="img" />
                        )}
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
        <a className="top" href="#">
          back to the top
        </a>
      </div>
    </>
  );
}
export default Fashion;
