import { useEffect } from "react";
import { sim } from "../sim/articles";

function HomePage() {
  const axios = require("axios").default;

  const getNews = () => {
    axios
      .get("")
      .then((res) => {
        console.log(res);
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
      <div className="container">
        {sim.map((item) => {
          return (
            <>
              <div className="card-c">
                <div className="card-r">
                  <div className="card">
                    <h1>{item.title}</h1>
                    <h3>{}</h3>
                    <p>{item.snip}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default HomePage;
