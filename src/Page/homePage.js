import { useEffect, useState } from "react";

function Home() {
  const axios = require("axios").default;
  const [news, setNews] = useState([]);

  const getNews = () => {
    axios
      .request("https://react-express-s.herokuapp.com/home")
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
      <div className="home">
        <div className="home-r">
          <h1>WELCOME TO THE LATEST NEWS ON THE WEB</h1>
          <p></p>
        </div>
      </div>
      <div className="home-t">
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
    </>
  );
}
export default Home;
