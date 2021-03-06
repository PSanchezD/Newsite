import { useEffect, useState } from "react";

function Tech() {
  const axios = require("axios").default;
  const [news, setNews] = useState([]);

  const getNews = () => {
    axios
      .get("https://react-express-s.herokuapp.com/Tech")
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <div>
        <div className="title">
          <h1>TOP TECH NEWS</h1>
        </div>
        <div className="container">
          {news.map((item) => {
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
                        {item.description == null ? null : (
                          <p>{item.description}</p>
                        )}
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
export default Tech;
